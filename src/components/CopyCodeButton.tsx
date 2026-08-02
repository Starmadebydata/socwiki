"use client";

import { useState } from "react";

export function CopyCodeButton({ code }: { code: string }) {
  const [state, setState] = useState<"idle" | "ok" | "err">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setState("ok");
      window.setTimeout(() => setState("idle"), 1600);
    } catch {
      setState("err");
      window.setTimeout(() => setState("idle"), 2000);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="soc-btn !px-3 !py-1 text-xs shrink-0"
      aria-label={`Copy code ${code}`}
    >
      {state === "ok" ? "Copied" : state === "err" ? "Failed" : "Copy"}
    </button>
  );
}
