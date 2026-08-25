import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0716",
          borderRadius: 7,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
          <defs>
            <linearGradient id="g" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#a894ff" />
              <stop offset="55%" stopColor="#7c5cff" />
              <stop offset="100%" stopColor="#3ee0e8" />
            </linearGradient>
          </defs>
          <path d="M7 5h18v4.2h-6.4v13.6H25V27H7v-4.2h6.4V9.2H7V5z" fill="url(#g)" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
