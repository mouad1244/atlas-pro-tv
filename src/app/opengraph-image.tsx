import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0716 0%, #17102c 45%, #2a2166 75%, #1a3a6e 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <svg width="96" height="96" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="g" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#a894ff" />
                <stop offset="55%" stopColor="#7c5cff" />
                <stop offset="100%" stopColor="#3ee0e8" />
              </linearGradient>
            </defs>
            <path d="M7 5h18v4.2h-6.4v13.6H25V27H7v-4.2h6.4V9.2H7V5z" fill="url(#g)" />
          </svg>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
            <span style={{ fontSize: 96, fontWeight: 800, color: "#f2f3f7", letterSpacing: -2 }}>
              IRON
            </span>
            <span
              style={{
                fontSize: 34,
                fontWeight: 700,
                color: "#3ee0e8",
                letterSpacing: 6,
              }}
            >
              TV
            </span>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 26, fontSize: 30, color: "rgba(255,255,255,0.72)" }}>
          Streaming Premium Nouvelle Génération
        </div>
      </div>
    ),
    { ...size }
  );
}
