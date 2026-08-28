import Link from "next/link";
import { Download } from "lucide-react";
import { ARTIFACTS } from "@/lib/product";
import { cn } from "@/lib/cn";

type Props = { compact?: boolean };

export function DownloadCards({ compact }: Props) {
  return (
    <div className={cn("grid gap-4", compact ? "md:grid-cols-2" : "max-w-3xl md:grid-cols-2")}>
      {ARTIFACTS.map((a) => (
        <div key={a.id} className="flex flex-col rounded-2xl border border-line bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">{a.platform}</p>
              <h3 className="mt-1 text-lg font-semibold text-ink">{a.label}</h3>
            </div>
            <span className="rounded-full bg-wash px-2 py-0.5 text-[11px] text-ink-3">{a.sizeHint}</span>
          </div>
          <p className="mt-2 flex-1 text-sm text-ink-2">{a.description}</p>
          <p className="mt-2 font-mono text-[11px] text-ink-3">{a.fileName}</p>
          <Link
            href={`/api/download/${a.id}`}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            <Download size={16} />
            Download
          </Link>
        </div>
      ))}
    </div>
  );
}

export function DownloadPageContent() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
      <h1 className="text-3xl font-bold text-ink">Download Desktop</h1>
      <p className="mt-2 max-w-2xl text-ink-2">MethodosBasic-LT_V4-Le1 배포 파일입니다.</p>
      <div className="mt-10">
        <DownloadCards />
      </div>
      <div className="mt-12 rounded-2xl border border-brand/20 bg-brand-wash/60 p-6">
        <h2 className="font-semibold text-ink">Window 및 Mac의 실행 안내</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink-2">
          <li>첫 실행 시 2~3분 정도 소요될 수 있습니다.</li>
          <li>SmartScreen 경고 시 추가 정보에서 실행을 하시면 됩니다.</li>
        </ul>
      </div>
      <p className="mt-8 text-sm text-ink-3">
        라이선스·고지 전문은{" "}
        <Link href="/about" className="text-brand hover:underline">
          About Methodos
        </Link>
        를 참고하세요.
      </p>
    </div>
  );
}
