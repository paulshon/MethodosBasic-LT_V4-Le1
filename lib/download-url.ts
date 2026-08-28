import type { ArtifactId } from "@/lib/product";
import { ARTIFACTS } from "@/lib/product";
import { storagePublicUrl } from "@/lib/supabase";

/** Windows 포터블 기본 배포 링크 (Google Drive) */
export const DEFAULT_WIN_PORTABLE_URL =
  "https://drive.google.com/file/d/1yONKRYcAnlCLEjau2YspOfqUsU_jHKnY/view";

const STORAGE_PATH: Record<ArtifactId, string> = {
  "win-portable": process.env.STORAGE_PATH_WIN_PORTABLE || "MethodosBasic-LT_V4-Le1.exe",
  "mac-zip": process.env.STORAGE_PATH_MAC_ZIP || "MethodosBasic-LT_V4-Le1-mac.zip",
};

export function resolveDownloadUrl(id: ArtifactId): string | null {
  const row = ARTIFACTS.find((a) => a.id === id);
  if (!row) return null;

  const direct = (process.env[row.envKey] || "").trim();
  if (direct) return direct;

  if (id === "win-portable") return DEFAULT_WIN_PORTABLE_URL;

  const bucket = (process.env.SUPABASE_RELEASES_BUCKET || "releases").trim();
  const path = STORAGE_PATH[id];
  return storagePublicUrl(bucket, path);
}

export function isValidArtifactId(value: string): value is ArtifactId {
  return ARTIFACTS.some((a) => a.id === value);
}
