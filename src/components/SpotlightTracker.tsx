"use client";

import { useEffect } from "react";

// One listener for the whole page: moves the glow inside whichever .spotlight card is under the cursor.
export default function SpotlightTracker() {
  useEffect(() => {
    function onMove(e: PointerEvent) {
      const card = (e.target as Element | null)?.closest?.(".spotlight") as HTMLElement | null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    }
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
