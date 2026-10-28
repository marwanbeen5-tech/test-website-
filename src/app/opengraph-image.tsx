import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} | ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The preview image shown when the site is shared on WhatsApp, Facebook, etc.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #07070d 0%, #2a1050 60%, #5b1240 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 36, color: "#ec4899", fontWeight: 700 }}>{site.tagline}</div>
        <div style={{ fontSize: 96, fontWeight: 800, marginTop: 12 }}>{site.name}</div>
        <div style={{ fontSize: 40, marginTop: 24, color: "#d4d4e4" }}>
          +45.000 canais · 4K/UHD · Suporte 24/7
        </div>
      </div>
    ),
    size
  );
}
