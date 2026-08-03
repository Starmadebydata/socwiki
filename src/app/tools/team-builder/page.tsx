"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { getAllCharacters } from "@/data/characters";
import {
  TEAM_PRESETS,
  formatTeamShareText,
} from "@/data/team-presets";
import type { Character, Role, Tier } from "@/types/character";
import { RoleAvatar } from "@/components/RoleAvatar";
import { TierBadge } from "@/components/TierBadge";

const MAX = 6;

const ROLES: Role[] = [
  "Breaker",
  "Defender",
  "Seeker",
  "Watcher",
  "Destroyer",
];

const TIER_ORDER: Tier[] = ["SSS", "SS", "S+", "S", "A", "B", "C"];

const counters: Record<Role, Role | null> = {
  Defender: "Seeker",
  Seeker: "Breaker",
  Breaker: "Defender",
  Watcher: "Destroyer",
  Destroyer: null,
};

const roleColor: Record<Role, string> = {
  Breaker: "#e74c3c",
  Defender: "#27ae60",
  Seeker: "#3498db",
  Watcher: "#f1c40f",
  Destroyer: "#9b59b6",
};

function parseTeamParam(raw: string | null): string[] {
  if (!raw) return [];
  return raw
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)
    .slice(0, MAX);
}

function teamQuery(slugs: string[]) {
  if (slugs.length === 0) return "";
  return `?team=${slugs.join(",")}`;
}

export default function TeamBuilderPage() {
  const all = useMemo(() => getAllCharacters(), []);
  const slugSet = useMemo(() => new Set(all.map((c) => c.slug)), [all]);

  const factions = useMemo(() => {
    const s = new Set<string>();
    for (const c of all) c.factions.forEach((f) => s.add(f));
    return [...s].sort((a, b) => a.localeCompare(b));
  }, [all]);

  const [picked, setPicked] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [roleFilter, setRoleFilter] = useState<Role | "All">("All");
  const [factionFilter, setFactionFilter] = useState<string>("All");
  const [q, setQ] = useState("");
  const [shareState, setShareState] = useState<"idle" | "ok" | "err">("idle");
  const [summaryState, setSummaryState] = useState<"idle" | "ok" | "err">(
    "idle",
  );
  const [activePresetId, setActivePresetId] = useState<string | null>(null);

  // Load from URL once
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromTeam = parseTeamParam(params.get("team")).filter((s) =>
      slugSet.has(s),
    );
    const fromPreset = params.get("preset");
    if (fromTeam.length) {
      setPicked(fromTeam);
      setActivePresetId(null);
    } else if (fromPreset) {
      const p = TEAM_PRESETS.find((x) => x.id === fromPreset);
      if (p) {
        setPicked(p.slugs.filter((s) => slugSet.has(s)).slice(0, MAX));
        setActivePresetId(p.id);
      }
    }
    setHydrated(true);
  }, [slugSet]);

  // Sync URL
  useEffect(() => {
    if (!hydrated) return;
    const next = `${window.location.pathname}${teamQuery(picked)}`;
    window.history.replaceState(null, "", next);
  }, [picked, hydrated]);

  const selected = useMemo(
    () =>
      picked
        .map((slug) => all.find((c) => c.slug === slug))
        .filter((c): c is Character => Boolean(c)),
    [picked, all],
  );

  const toggle = useCallback((slug: string) => {
    setActivePresetId(null);
    setPicked((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= MAX) return prev;
      return [...prev, slug];
    });
  }, []);

  const loadPreset = useCallback(
    (id: string, slugs: string[]) => {
      setActivePresetId(id);
      setPicked(slugs.filter((s) => slugSet.has(s)).slice(0, MAX));
    },
    [slugSet],
  );

  const clear = useCallback(() => {
    setActivePresetId(null);
    setPicked([]);
  }, []);

  const filteredRoster = useMemo(() => {
    const query = q.trim().toLowerCase();
    return all
      .filter((c) => {
        if (roleFilter !== "All" && c.role !== roleFilter) return false;
        if (
          factionFilter !== "All" &&
          !c.factions.includes(factionFilter)
        )
          return false;
        if (!query) return true;
        return (
          c.name.toLowerCase().includes(query) ||
          c.slug.includes(query) ||
          c.role.toLowerCase().includes(query) ||
          c.factions.some((f) => f.toLowerCase().includes(query))
        );
      })
      .sort((a, b) => {
        const ta = TIER_ORDER.indexOf(a.tier.overall);
        const tb = TIER_ORDER.indexOf(b.tier.overall);
        if (ta !== tb) return ta - tb;
        return a.name.localeCompare(b.name);
      });
  }, [all, roleFilter, factionFilter, q]);

  const roleCounts = selected.reduce<Record<string, number>>((acc, c) => {
    acc[c.role] = (acc[c.role] ?? 0) + 1;
    return acc;
  }, {});

  const factionCounts = selected
    .flatMap((c) => c.factions)
    .reduce<Record<string, number>>((acc, f) => {
      acc[f] = (acc[f] ?? 0) + 1;
      return acc;
    }, {});

  const matchupEdges = useMemo(() => {
    const edges: { from: Character; into: Role; ok: boolean }[] = [];
    for (const c of selected) {
      const adv = counters[c.role];
      if (!adv) continue;
      const hasTarget = selected.some(
        (o) => o.slug !== c.slug && o.role === adv,
      );
      // For coaching: show who on YOUR team counters which role (map prep)
      edges.push({ from: c, into: adv, ok: true });
      void hasTarget;
    }
    return edges;
  }, [selected]);

  const warnings = useMemo(() => {
    const w: string[] = [];
    if (selected.length === 0) return w;
    if (!roleCounts.Watcher)
      w.push("No Watcher — you may lack heal / Act Again / battery.");
    if (!roleCounts.Defender)
      w.push("No Defender — frontline cover may be thin.");
    const dps =
      (roleCounts.Breaker ?? 0) +
      (roleCounts.Seeker ?? 0) +
      (roleCounts.Destroyer ?? 0);
    if (dps === 0) w.push("No damage role (Breaker / Seeker / Destroyer).");
    if (selected.length >= 4 && dps === 1)
      w.push("Only one damage dealer — stages with multiple threats may stall.");
    const topFaction = Object.entries(factionCounts).sort(
      (a, b) => b[1] - a[1],
    )[0];
    if (topFaction && topFaction[1] >= 3) {
      w.push(
        `${topFaction[0]} ×${topFaction[1]} — faction aura breakpoint likely online.`,
      );
    } else if (selected.length >= 5) {
      w.push("No 3+ faction cluster — aura bonuses may be incomplete.");
    }
    return w;
  }, [selected.length, roleCounts, factionCounts]);

  function shareUrl() {
    return `${window.location.origin}/tools/team-builder${teamQuery(picked)}`;
  }

  async function copyShareLink() {
    try {
      await navigator.clipboard.writeText(shareUrl());
      setShareState("ok");
      window.setTimeout(() => setShareState("idle"), 1600);
    } catch {
      setShareState("err");
      window.setTimeout(() => setShareState("idle"), 2000);
    }
  }

  async function copyTeamSummary() {
    try {
      const preset = activePresetId
        ? TEAM_PRESETS.find((p) => p.id === activePresetId)
        : undefined;
      const text = formatTeamShareText(
        selected.map((c) => `${c.name} (${c.role})`),
        shareUrl(),
        { goal: preset?.goal },
      );
      await navigator.clipboard.writeText(text);
      setSummaryState("ok");
      window.setTimeout(() => setSummaryState("idle"), 1600);
    } catch {
      setSummaryState("err");
      window.setTimeout(() => setSummaryState("idle"), 2000);
    }
  }

  async function nativeShare() {
    if (!navigator.share) {
      await copyShareLink();
      return;
    }
    try {
      const preset = activePresetId
        ? TEAM_PRESETS.find((p) => p.id === activePresetId)
        : undefined;
      const text = formatTeamShareText(
        selected.map((c) => c.name),
        shareUrl(),
        { goal: preset?.goal },
      );
      await navigator.share({
        title: "SoC team — SoC Wiki",
        text,
        url: shareUrl(),
      });
    } catch {
      /* user cancelled */
    }
  }

  function chipClass(active: boolean) {
    return `rounded-full border px-2.5 py-1 text-[11px] font-semibold transition ${
      active
        ? "border-[var(--border-bright)] bg-[var(--accent-soft)] text-[var(--accent-bright)]"
        : "border-transparent bg-[var(--card-deep)] text-muted hover:border-[var(--border-soft)]"
    }`;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="soc-heading-sm">Tools · v0.3</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        Team Builder
      </h1>
      <div className="soc-divider my-5 max-w-md" />
      <p className="max-w-2xl text-muted">
        Pick up to {MAX} units, load a preset, copy a share link or full team
        summary. Coverage checks role holes, faction clusters, and matchup
        edges — pair with{" "}
        <Link href="/guides/party-building" className="text-link hover:underline">
          party building
        </Link>
        ,{" "}
        <Link href="/guides/early-teams" className="text-link hover:underline">
          early teams
        </Link>
        , and{" "}
        <Link
          href="/guides/spiral-of-destinies"
          className="text-link hover:underline"
        >
          Spiral prep
        </Link>
        .
      </p>

      {/* Presets */}
      <section className="mt-8" aria-labelledby="presets-h">
        <h2 id="presets-h" className="soc-section-title mb-3">
          Presets
        </h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {TEAM_PRESETS.map((p) => {
            const active = activePresetId === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => loadPreset(p.id, p.slugs)}
                className={`soc-frame p-4 text-left transition hover:border-[var(--border-bright)] ${
                  active ? "border-[var(--border-bright)] bg-[var(--accent-soft)]/40" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display font-semibold tracking-wide">
                    {p.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[var(--accent)]">
                    {p.goal}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted">{p.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {p.slugs.map((slug) => {
                    const c = all.find((x) => x.slug === slug);
                    if (!c) return null;
                    return (
                      <RoleAvatar
                        key={slug}
                        name={c.name}
                        role={c.role}
                        slug={c.slug}
                        size="sm"
                        className="!h-7 !w-7"
                      />
                    );
                  })}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        {/* Roster */}
        <section className="lg:col-span-3">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <h2 className="soc-heading text-lg">Roster</h2>
            <span className="text-xs text-muted">
              {filteredRoster.length} shown · click to toggle
            </span>
          </div>

          <div className="mb-3 flex flex-wrap gap-1.5">
            <button
              type="button"
              className={chipClass(roleFilter === "All")}
              onClick={() => setRoleFilter("All")}
            >
              All roles
            </button>
            {ROLES.map((r) => (
              <button
                key={r}
                type="button"
                className={chipClass(roleFilter === r)}
                onClick={() => setRoleFilter(r)}
              >
                {r}
              </button>
            ))}
          </div>

          <div className="mb-3 flex flex-wrap gap-1.5">
            <button
              type="button"
              className={chipClass(factionFilter === "All")}
              onClick={() => setFactionFilter("All")}
            >
              All factions
            </button>
            {factions.map((f) => (
              <button
                key={f}
                type="button"
                className={chipClass(factionFilter === f)}
                onClick={() => setFactionFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name, role, faction…"
            className="soc-search mb-3 max-w-full !py-2 text-sm"
          />

          <ul className="grid max-h-[560px] gap-2 overflow-y-auto pr-1 sm:grid-cols-2">
            {filteredRoster.map((c) => {
              const on = picked.includes(c.slug);
              const full = !on && picked.length >= MAX;
              return (
                <li key={c.slug}>
                  <button
                    type="button"
                    disabled={full}
                    onClick={() => toggle(c.slug)}
                    className={`flex w-full items-center gap-2.5 rounded-xl border px-2.5 py-2 text-left text-sm transition ${
                      on
                        ? "border-[var(--border-bright)] bg-[var(--accent-soft)]"
                        : full
                          ? "cursor-not-allowed border-transparent bg-[var(--card-deep)] opacity-40"
                          : "border-[var(--border-soft)] bg-[var(--card)] hover:border-[var(--border-bright)]"
                    }`}
                  >
                    <RoleAvatar
                      name={c.name}
                      role={c.role}
                      slug={c.slug}
                      size="sm"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="truncate font-medium">{c.name}</span>
                        <TierBadge tier={c.tier.overall} />
                      </div>
                      <div className="truncate text-[11px] text-muted">
                        {c.role} · {c.factions.slice(0, 2).join(" · ")}
                      </div>
                    </div>
                    <span className="shrink-0 text-xs text-[var(--accent)]">
                      {on ? "✓" : "+"}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Analysis */}
        <section className="space-y-4 lg:col-span-2">
          <div className="soc-frame p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="soc-heading text-lg">
                Team ({picked.length}/{MAX})
              </h2>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={copyShareLink}
                  className="soc-btn !px-3 !py-1 text-xs"
                  disabled={picked.length === 0}
                >
                  {shareState === "ok"
                    ? "Link copied"
                    : shareState === "err"
                      ? "Failed"
                      : "Copy link"}
                </button>
                <button
                  type="button"
                  onClick={copyTeamSummary}
                  className="soc-btn !px-3 !py-1 text-xs"
                  disabled={picked.length === 0}
                >
                  {summaryState === "ok"
                    ? "Summary copied"
                    : summaryState === "err"
                      ? "Failed"
                      : "Copy summary"}
                </button>
                <button
                  type="button"
                  onClick={nativeShare}
                  className="soc-btn !px-3 !py-1 text-xs"
                  disabled={picked.length === 0}
                >
                  Share…
                </button>
                <button
                  type="button"
                  onClick={clear}
                  className="soc-btn !px-3 !py-1 text-xs"
                  disabled={picked.length === 0}
                >
                  Clear
                </button>
              </div>
            </div>

            {selected.length === 0 ? (
              <p className="mt-3 text-sm text-muted">
                Select units from the roster or load a preset.
              </p>
            ) : (
              <ul className="mt-4 space-y-2">
                {selected.map((c) => (
                  <li
                    key={c.slug}
                    className="flex items-center gap-2 rounded-lg border border-[var(--border-soft)]/50 bg-[var(--card-deep)]/40 px-2 py-1.5"
                  >
                    <RoleAvatar
                      name={c.name}
                      role={c.role}
                      slug={c.slug}
                      size="sm"
                    />
                    <div className="min-w-0 flex-1">
                      <Link
                        href={`/characters/${c.slug}`}
                        className="font-medium text-link hover:underline"
                      >
                        {c.name}
                      </Link>
                      <div className="text-[11px] text-muted">
                        {c.role} · {c.tier.overall}
                        {counters[c.role]
                          ? ` · strong vs ${counters[c.role]}`
                          : ""}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggle(c.slug)}
                      className="text-xs text-muted hover:text-[var(--accent-bright)]"
                      aria-label={`Remove ${c.name}`}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="soc-frame p-5">
            <h2 className="soc-heading text-base">Role coverage</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {ROLES.map((role) => {
                const n = roleCounts[role] ?? 0;
                return (
                  <li key={role} className="flex items-center gap-2">
                    <span
                      className={`w-20 font-medium ${n ? "text-foreground" : "text-muted"}`}
                      style={n ? { color: roleColor[role] } : undefined}
                    >
                      {role}
                    </span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-[var(--card-deep)]">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${Math.min(100, n * 34)}%`,
                          backgroundColor: roleColor[role],
                          opacity: 0.75,
                        }}
                      />
                    </div>
                    <span className="w-4 text-right text-xs text-muted">{n}</span>
                    {n > 0 && counters[role] ? (
                      <span className="hidden text-[10px] text-muted sm:inline">
                        vs {counters[role]}
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="soc-frame p-5">
            <div className="flex items-center justify-between gap-2">
              <h2 className="soc-heading text-base">Matchup edges</h2>
              <Link
                href="/guides/role-matchups"
                className="text-[10px] text-link hover:underline"
              >
                Full chart →
              </Link>
            </div>
            {matchupEdges.length === 0 ? (
              <p className="mt-2 text-sm text-muted">
                Select units to see who they counter on the map.
              </p>
            ) : (
              <ul className="mt-3 space-y-1.5 text-sm text-muted">
                {matchupEdges.map(({ from, into }) => (
                  <li
                    key={`${from.slug}-${into}`}
                    className="flex items-center gap-2"
                  >
                    <span className="text-foreground">{from.name}</span>
                    <span className="text-[var(--accent)]">→</span>
                    <span style={{ color: roleColor[into] }}>{into}</span>
                  </li>
                ))}
                {!roleCounts.Destroyer && !roleCounts.Watcher ? null : (
                  <li className="pt-1 text-[11px] text-muted">
                    Magic lane: Watcher edges Destroyer (see full chart).
                  </li>
                )}
              </ul>
            )}
          </div>

          <div className="soc-frame p-5">
            <h2 className="soc-heading text-base">Faction overlap</h2>
            {Object.keys(factionCounts).length === 0 ? (
              <p className="mt-2 text-sm text-muted">Select units to analyze.</p>
            ) : (
              <ul className="mt-3 space-y-1.5 text-sm text-muted">
                {Object.entries(factionCounts)
                  .sort((a, b) => b[1] - a[1])
                  .map(([f, n]) => (
                    <li key={f} className="flex justify-between gap-2">
                      <span>{f}</span>
                      <span
                        className={
                          n >= 3
                            ? "font-semibold text-[var(--accent-bright)]"
                            : ""
                        }
                      >
                        {n}
                        {n >= 3 ? " · aura" : ""}
                      </span>
                    </li>
                  ))}
              </ul>
            )}
          </div>

          {warnings.length > 0 ? (
            <div className="soc-parchment p-5 text-sm">
              <h2 className="font-display font-semibold text-[var(--ink)]">
                Coach notes
              </h2>
              <ul className="mt-2 list-disc space-y-1.5 pl-4 text-[var(--ink-muted)]">
                {warnings.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="text-xs text-muted">
            Share URL updates as you pick units. Example:{" "}
            <code className="text-foreground/80">
              /tools/team-builder?team=inanna,col,cocoa
            </code>
            {" · "}
            <code className="text-foreground/80">?preset=spiral-ready</code>
          </div>
        </section>
      </div>
    </div>
  );
}
