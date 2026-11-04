// Generates the brand assets in public/brand/ from one SVG mark, so every size stays
// consistent. Run with: npm run brand
import { mkdirSync } from "node:fs";
import sharp from "sharp";

const OUT = new URL("../public/brand/", import.meta.url);
mkdirSync(OUT, { recursive: true });
const FONT = "Segoe UI, Arial, sans-serif";

// The mark on a 512×512 canvas: TV with antenna and play button, plus a green/red strip for Portugal.
const markInner = `
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#7c3aed"/><stop offset="1" stop-color="#ec4899"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#g)"/>
  <path d="M196 62 L256 124 L316 62" fill="none" stroke="#fff" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="88" y="128" width="336" height="232" rx="40" fill="none" stroke="#fff" stroke-width="28"/>
  <path d="M216 186 L326 244 L216 302 Z" fill="#fff" stroke="#fff" stroke-width="16" stroke-linejoin="round"/>
  <rect x="136" y="390" width="240" height="44" rx="22" fill="#0b0b14"/>
  <rect x="156" y="403" width="96" height="18" rx="9" fill="#22c55e"/>
  <rect x="260" y="403" width="96" height="18" rx="9" fill="#ef4444"/>`;

const mark = (size) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">${markInner}</svg>`);
const png = (buf, name) => sharp(buf).png({ compressionLevel: 9 }).toFile(new URL(name, OUT).pathname.replace(/^\/([A-Z]:)/, "$1"));

// Square profile pictures (the safe circle crop keeps the whole mark visible on a dark ground).
async function profile(size, name) {
  const inner = Math.round(size * 0.74);
  const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><defs><linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#07070d"/><stop offset="0.6" stop-color="#1c0d38"/><stop offset="1" stop-color="#3a0f2c"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#b)"/></svg>`);
  const m = await sharp(mark(inner)).png().toBuffer();
  const out = await sharp(bg).composite([{ input: m, gravity: "center" }]).png().toBuffer();
  await png(out, name);
}

// Wide banner: mark + name + tagline, centred so it survives cropping on phones.
async function banner(w, h, scale, name) {
  const markSize = Math.round(150 * scale);
  const title = Math.round(92 * scale);
  const sub = Math.round(36 * scale);
  const textX = Math.round(markSize + 36 * scale);
  // 830 = tagline width at scale 1, so the whole block is truly centred.
  const blockW = textX + Math.round(830 * scale);
  const left = Math.round((w - blockW) / 2);
  const top = Math.round((h - markSize) / 2);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <defs>
      <linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#07070d"/><stop offset="0.6" stop-color="#2a1050"/><stop offset="1" stop-color="#5b1240"/></linearGradient>
      <radialGradient id="glow"><stop offset="0" stop-color="#7c3aed" stop-opacity="0.45"/><stop offset="1" stop-color="#7c3aed" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#b)"/>
    <circle cx="${w * 0.2}" cy="${h * 0.25}" r="${h * 0.7}" fill="url(#glow)"/>
    <text x="${left + textX}" y="${top + Math.round(markSize * 0.56)}" font-family="${FONT}" font-size="${title}" font-weight="800" fill="#ffffff">Portugal IPTV</text>
    <text x="${left + textX}" y="${top + Math.round(markSize * 0.56) + Math.round(sub * 1.5)}" font-family="${FONT}" font-size="${sub}" fill="#d4d4e4">Televisão pela internet · Suporte em português 24/7</text>
  </svg>`;
  const m = await sharp(mark(markSize)).png().toBuffer();
  const out = await sharp(Buffer.from(svg)).composite([{ input: m, left, top }]).png().toBuffer();
  await png(out, name);
}

await png(mark(512), "logo-512.png");
await png(mark(1024), "logo-1024.png");
await profile(1024, "perfil-redes-sociais.png");
// Facebook crops the sides on phones: keep the block inside the middle ~1100px.
await banner(1640, 624, 1.05, "capa-facebook.png");
// YouTube only shows the central 1546×423 on every device.
await banner(2560, 1440, 1.45, "banner-youtube.png");
console.log("Brand assets written to public/brand/");
