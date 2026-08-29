import { resolveDownloadUrl } from "@/lib/download-url";

export const PRODUCT = {
  slug: "methodos-basic-lt",
  name: "Methodos Basic",
  edition: "LT",
  tagline: "연구용 통계분석 데스크톱",
  version: "21.0.0-LT.V4-Le1",
} as const;

export type ArtifactId = "win-portable" | "mac-x64-dmg" | "mac-arm64-dmg";

export type ReleaseArtifact = {
  id: ArtifactId;
  label: string;
  platform: "Windows" | "macOS";
  description: string;
  fileName: string;
  sizeHint: string;
  envKey: string;
};

export const WIN_ARTIFACT: ReleaseArtifact = {
  id: "win-portable",
  label: "Windows 포터블",
  platform: "Windows",
  description: "설치 없이 exe 하나로 실행. USB·오프라인 환경에 적합합니다.",
  fileName: "MethodosBasic-LT_V4-Le1.exe",
  sizeHint: "~172 MB",
  envKey: "NEXT_PUBLIC_DOWNLOAD_WIN_PORTABLE_URL",
};

export const MAC_DMG_ARTIFACTS: ReleaseArtifact[] = [
  {
    id: "mac-x64-dmg",
    label: "Intel (x64)",
    platform: "macOS",
    description: "Intel Mac용 dmg 설치 파일입니다.",
    fileName: "MethodosBasic-LT_V1-Le1-6M-mac-x64.dmg",
    sizeHint: "dmg",
    envKey: "NEXT_PUBLIC_DOWNLOAD_MAC_X64_DMG_URL",
  },
  {
    id: "mac-arm64-dmg",
    label: "Apple Silicon (arm64)",
    platform: "macOS",
    description: "Apple Silicon Mac용 dmg 설치 파일입니다.",
    fileName: "MethodosBasic-LT_V1-Le1-6M-mac-arm64.dmg",
    sizeHint: "dmg",
    envKey: "NEXT_PUBLIC_DOWNLOAD_MAC_ARM64_DMG_URL",
  },
];

/** @deprecated use WIN_ARTIFACT + MAC_DMG_ARTIFACTS */
export const ARTIFACTS: ReleaseArtifact[] = [WIN_ARTIFACT, ...MAC_DMG_ARTIFACTS];

export const STATS = [
  { value: "43", label: "통계 기법" },
  { value: "43", label: "예제 데이터" },
  { value: "64", label: "개념사전 항목" },
  { value: "3", label: "학습 가이드" },
] as const;

export const FEATURES = [
  {
    title: "클릭 한 번으로 분석",
    body: "변수를 고르고 옵션을 설정하면 표·그래프·해석이 한 화면에 갱신됩니다. 기존 통계프로그램 스타일 워크플로에 익숙한 연구자를 위한 데스크톱 UI입니다.",
  },
  {
    title: "통계학원론 탑재",
    body: "통계계산은 탑재된 통계엔진이 수행하고, 온라인연결없이 로컬에서 전부동작하게 설계되었습니다.",
  },
  {
    title: "예제·학습 자료 내장",
    body: "기법별 예제 43벌, 학습 가이드 3권, 개념사전 64항목, 수집자료 안내 38벌이 탑재되어 있습니다.",
  },
  {
    title: "다국어 UI",
    body: "한국어·영어·중국어(간체) 인터페이스 전환을 지원합니다.",
  },
] as const;

export const WINDOWS_NOTES = [
  "첫 실행 시 20~30초 정도 걸릴 수 있습니다(임시 폴더에 엔진 풀기). %TEMP% 여유 공간 약 1GB를 권장합니다.",
  "코드 서명 인증서가 없어 Windows SmartScreen 경고가 뜰 수 있습니다. 「추가 정보 → 실행」으로 진행하세요.",
  "작업 자료는 기본적으로 exe 옆 Data 폴더에 저장됩니다.",
] as const;

export function artifactPublicUrl(id: ArtifactId): string | null {
  return resolveDownloadUrl(id);
}

export function productDisplayName(): string {
  return `${PRODUCT.name} ${PRODUCT.edition}`.trim();
}
