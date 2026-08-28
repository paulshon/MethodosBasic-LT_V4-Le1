import { resolveDownloadUrl } from "@/lib/download-url";

export const PRODUCT = {
  slug: "methodos-basic-lt-v4-le1",
  name: "Methodos Basic",
  edition: "LT V4-Le1",
  tagline: "연구용 통계분석 데스크톱",
  version: "21.0.0-LT.V4-Le1",
} as const;

export type ArtifactId = "win-portable" | "mac-zip";

export type ReleaseArtifact = {
  id: ArtifactId;
  label: string;
  platform: "Windows" | "macOS";
  description: string;
  fileName: string;
  sizeHint: string;
  envKey: string;
};

export const ARTIFACTS: ReleaseArtifact[] = [
  {
    id: "win-portable",
    label: "Windows 포터블",
    platform: "Windows",
    description: "설치 없이 exe 하나로 실행. USB·오프라인 환경에 적합합니다.",
    fileName: "MethodosBasic-LT_V4-Le1.exe",
    sizeHint: "~172 MB",
    envKey: "NEXT_PUBLIC_DOWNLOAD_WIN_PORTABLE_URL",
  },
  {
    id: "mac-zip",
    label: "macOS ZIP",
    platform: "macOS",
    description: "압축 해제 후 실행합니다.",
    fileName: "MethodosBasic-LT_V4-Le1-mac.zip",
    sizeHint: "빌드 후 업로드",
    envKey: "NEXT_PUBLIC_DOWNLOAD_MAC_ZIP_URL",
  },
];

export const STATS = [
  { value: "43", label: "통계 기법" },
  { value: "43", label: "예제 데이터" },
  { value: "64", label: "개념사전 항목" },
  { value: "3", label: "학습 가이드" },
] as const;

export const FEATURES = [
  {
    title: "클릭 한 번으로 분석",
    body: "변수를 고르고 옵션을 설정하면 표·그래프·해석이 한 화면에 갱신됩니다. SPSS 스타일 워크플로에 익숙한 연구자를 위한 데스크톱 UI입니다.",
  },
  {
    title: "Python 통계 엔진",
    body: "화면은 Electron·React, 계산은 동봉된 Python 엔진(MethodosEngine)이 수행합니다. 인터넷 없이 로컬에서 전부 동작합니다.",
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
