import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/seo";

export const alt = "Mateusz Koczorowski - Senior QA Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#071019",
        color: "#f4f7fb",
        padding: "72px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 24,
          color: siteConfig.accentColor,
          letterSpacing: 0,
        }}
      >
        <span>{siteConfig.role}</span>
        <span>QA / Automation / AI-assisted workflows</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
        <div
          style={{
            width: 84,
            height: 8,
            background: siteConfig.accentColor,
            borderRadius: 2,
          }}
        />
        <h1
          style={{
            margin: 0,
            fontSize: 78,
            lineHeight: 0.96,
            fontWeight: 700,
            letterSpacing: 0,
            maxWidth: 920,
          }}
        >
          Mateusz Koczorowski
        </h1>
        <p
          style={{
            margin: 0,
            maxWidth: 940,
            fontSize: 34,
            lineHeight: 1.3,
            color: "#b7c5d4",
          }}
        >
          Automation architecture, Playwright and Cypress, MCP workflows, release risk, and
          human-reviewed AI-assisted QA.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: 18,
          fontSize: 24,
          color: "#d7e0ea",
        }}
      >
        {["Quality Engineering", "Test Automation", "QA Strategy"].map((item) => (
          <span
            key={item}
            style={{
              display: "flex",
              border: "1px solid rgba(110, 231, 216, 0.32)",
              padding: "12px 18px",
              borderRadius: 8,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>,
    size,
  );
}
