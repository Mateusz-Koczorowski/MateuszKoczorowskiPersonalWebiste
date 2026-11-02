"use client";

import { useState } from "react";

export function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    window.setTimeout(() => setStatus("idle"), 2500);
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="min-h-11 rounded-[10px] border-[1.5px] border-ink bg-surface px-4 text-[0.9375rem] font-semibold text-ink"
      >
        {status === "copied" ? "Copied" : "Copy"}
      </button>
      <span role="status" aria-live="polite" className="text-[0.9375rem] text-graphite">
        {status === "copied" ? "Email address copied." : ""}
        {status === "failed" ? "Copy failed. Select the address and copy it manually." : ""}
      </span>
    </>
  );
}
