import type { Role } from "@/types/character";

/** Official-ish SoC role colors for UI (not game assets). */
export const ROLE_STYLES: Record<
  Role,
  { label: string; hex: string; soft: string; gradient: string }
> = {
  Breaker: {
    label: "Breaker",
    hex: "#e74c3c",
    soft: "rgba(231, 76, 60, 0.18)",
    gradient: "linear-gradient(145deg, #3a1515 0%, #8b1e1e 45%, #e74c3c 100%)",
  },
  Defender: {
    label: "Defender",
    hex: "#27ae60",
    soft: "rgba(39, 174, 96, 0.18)",
    gradient: "linear-gradient(145deg, #0f2a1a 0%, #1a6b3c 45%, #27ae60 100%)",
  },
  Destroyer: {
    label: "Destroyer",
    hex: "#9b59b6",
    soft: "rgba(155, 89, 182, 0.18)",
    gradient: "linear-gradient(145deg, #1e1230 0%, #5b2d7a 45%, #9b59b6 100%)",
  },
  Watcher: {
    label: "Watcher",
    hex: "#f1c40f",
    soft: "rgba(241, 196, 15, 0.16)",
    gradient: "linear-gradient(145deg, #2a2410 0%, #8a7010 45%, #f1c40f 100%)",
  },
  Seeker: {
    label: "Seeker",
    hex: "#3498db",
    soft: "rgba(52, 152, 219, 0.18)",
    gradient: "linear-gradient(145deg, #0e2133 0%, #1a5f8f 45%, #3498db 100%)",
  },
};

export function roleStyle(role: Role) {
  return ROLE_STYLES[role];
}
