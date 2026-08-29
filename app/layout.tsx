import type { Metadata, Viewport } from "next";
import { AppProviders } from "@/components/providers";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Methodos Basic — 연구용 통계분석 데스크톱",
  description:
    "Methodos Basic LT. Windows·macOS 다운로드, 43종 통계 기법, 오프라인 로컬 엔진.",
};

export const viewport: Viewport = {
  themeColor: "#0B665C",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="font-sans">
        <AppProviders>
          <SiteNav />
          {children}
          <SiteFooter />
        </AppProviders>
      </body>
    </html>
  );
}
