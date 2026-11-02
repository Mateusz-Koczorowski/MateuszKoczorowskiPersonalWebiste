import { ImageResponse } from "next/og";

export const alt = "Mateusz Koczorowski - AI-first quality engineering";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const ink = "#edf2f9";
const paper = "#08111c";
const graphite = "#9ca6b0";
const verified = "#3ed0c8";
const marker = "#3ed0c8";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: paper,
        color: ink,
        padding: "72px",
        fontFamily: "Arial",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, color: graphite }}>
        Mateusz Koczorowski, Senior QA Engineer and AI QA Champion
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 76,
          lineHeight: 1.04,
          fontWeight: 700,
          maxWidth: 1000,
        }}
      >
        AI-first quality engineering, with the judgment kept human.
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 30 }}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke={verified}
          strokeWidth="2.4"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m7.5 12.5 3 3 6-6.5" />
        </svg>
        <span style={{ display: "flex", background: marker, color: paper, padding: "4px 10px" }}>
          AI testing agents, Playwright automation, clinical trials software
        </span>
      </div>
    </div>,
    size,
  );
}
