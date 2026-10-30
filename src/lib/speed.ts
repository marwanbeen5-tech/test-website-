// Recommended internet speed for IPTV, used by the calculator and its page.
// Mbps per screen, with a safety margin. Keep in line with the speed article in posts.ts.
export const qualities = [
  { id: "sd", label: "SD", detail: "qualidade normal", mbps: 5 },
  { id: "hd", label: "HD", detail: "720p", mbps: 10 },
  { id: "fhd", label: "Full HD", detail: "1080p", mbps: 15 },
  { id: "uhd", label: "4K / UHD", detail: "2160p", mbps: 25 },
] as const;

// Extra margin for the rest of the household's internet use.
export const householdUse = [
  { id: "light", label: "Leve", detail: "telemóveis, redes sociais, email", mbps: 5 },
  { id: "medium", label: "Média", detail: "videochamadas, YouTube, Netflix noutro ecrã", mbps: 15 },
  { id: "heavy", label: "Intensa", detail: "downloads, jogos online, teletrabalho", mbps: 30 },
] as const;

export type QualityId = (typeof qualities)[number]["id"];
export type HouseholdUseId = (typeof householdUse)[number]["id"];
