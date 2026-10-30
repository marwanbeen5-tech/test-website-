// Submits every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver...).
// Bing's index feeds Microsoft Copilot and ChatGPT search, so new and updated pages
// reach those answers faster. Run after a deploy:
//
//   npm run indexnow
//
// SITE_URL defaults to the production site. The key is the name of the .txt file in
// public/, which IndexNow fetches to confirm the site is ours.

import { readdirSync } from "node:fs";

const SITE = (process.env.SITE_URL || "https://www.portugaliptv.top").replace(/\/$/, "");
const keyFile = readdirSync(new URL("../public/", import.meta.url)).find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) throw new Error("No IndexNow key file (32 hex characters + .txt) found in public/");
const key = keyFile.replace(/\.txt$/, "");

const sitemap = await fetch(`${SITE}/sitemap.xml`).then((r) => {
  if (!r.ok) throw new Error(`sitemap.xml returned ${r.status}`);
  return r.text();
});
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urls.length) throw new Error("sitemap.xml has no URLs");

// IndexNow checks that the key file is live before accepting the submission.
const keyCheck = await fetch(`${SITE}/${keyFile}`);
if (!keyCheck.ok || (await keyCheck.text()).trim() !== key) {
  throw new Error(`Key file ${SITE}/${keyFile} is not live yet (status ${keyCheck.status})`);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key, keyLocation: `${SITE}/${keyFile}`, urlList: urls }),
});

// 200 = accepted, 202 = accepted, key validation pending.
console.log(`IndexNow: submitted ${urls.length} URLs → HTTP ${res.status}`);
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text());
  process.exit(1);
}
