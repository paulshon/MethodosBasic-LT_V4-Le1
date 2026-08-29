import type { ArtifactId } from "@/lib/product";
import { ARTIFACTS } from "@/lib/product";
import { storagePublicUrl } from "@/lib/supabase";

/** Windows 포터블 기본 배포 링크 (Google Drive) */
export const DEFAULT_WIN_PORTABLE_URL =
  "https://drive.google.com/file/d/1yONKRYcAnlCLEjau2YspOfqUsU_jHKnY/view";

export const DEFAULT_MAC_X64_DMG_URL =
  "https://drive.google.com/file/d/1NIadHePoIJqUH5qfb-TGeNSS294P52cJ/view?usp=sharing";

export const DEFAULT_MAC_ARM64_DMG_URL =
  "https://drive.google.com/file/d/1d234UNsSPzgfVAG0oN2dexlQVJyTTTbz/view?usp=sharing";

const STORAGE_PATH: Partial<Record<ArtifactId, string>> = {
  "win-portable": process.env.STORAGE_PATH_WIN_PORTABLE || "MethodosBasic-LT_V4-Le1.exe",
};

export function resolveDownloadUrl(id: ArtifactId): string | null {
  const row = ARTIFACTS.find((a) => a.id === id);
  if (!row) return null;

  const direct = (process.env[row.envKey] || "").trim();
  if (direct) return direct;

  if (id === "win-portable") return DEFAULT_WIN_PORTABLE_URL;
  if (id === "mac-x64-dmg") return DEFAULT_MAC_X64_DMG_URL;
  if (id === "mac-arm64-dmg") return DEFAULT_MAC_ARM64_DMG_URL;

  const path = STORAGE_PATH[id];
  if (!path) return null;

  const bucket = (process.env.SUPABASE_RELEASES_BUCKET || "releases").trim();
  return storagePublicUrl(bucket, path);
}

export function isValidArtifactId(value: string): value is ArtifactId {
  return ARTIFACTS.some((a) => a.id === value);
}
