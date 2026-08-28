import Link from "next/link";
import { BarChart3, BookOpen, HardDrive, Sparkles } from "lucide-react";
import { FEATURES, PRODUCT, STATS } from "@/lib/product";
import { DownloadCards } from "./download-cards";

export function LandingPage() {
  return (
    <main>
      <section id="hero" className="border-b border-line bg-gradient-to-b from-brand-wash/80 to-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:items-center lg:px-6 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Desktop · Offline</p>
            <h1 className="mt-3 font-myeongjo text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl">
              Stats made clear.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-ink-2">
              <strong className="font-semibold text-ink">{PRODUCT.name}</strong> {PRODUCT.edition} — 연구용 통계분석
              데스크톱. 클릭 기반 분석, 내장 예제·학습 가이드, 로컬 Python 엔진.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/download"
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-brand-dark"
              >
                Download Desktop
              </Link>
              <a
                href="#features"
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark"
              >
                See features
              </a>
            </div>
            <p className="mt-4 text-xs text-ink-3">오프라인 · Windows / macOS</p>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6 shadow-lg shadow-brand/10">
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-xl bg-wash px-4 py-5 text-center">
                  <div className="text-3xl font-extrabold text-brand">{s.value}</div>
                  <div className="mt-1 text-xs font-medium text-ink-2">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-ink-3">MethodosBasic-LT_V4-Le1 · {PRODUCT.version}</p>
          </div>
        </div>
      </section>

      <section id="why" className="border-b border-line bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand">Why Methodos Basic</p>
          <h2 className="mt-2 text-center font-myeongjo text-3xl font-bold text-ink">
            Simple to use. Powered locally. Built for research.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: Sparkles, title: "Point, click, analyze", text: "변수 선택과 옵션 설정만으로 표·그래프·해석을 확인합니다." },
              { icon: BarChart3, title: "43 techniques", text: "기초 기술통계부터 회귀·요인·비모수까지 연구 현장에서 쓰는 기법을 담았습니다." },
              { icon: BookOpen, title: "Learn as you go", text: "예제 데이터·학습 가이드·개념사전으로 결과 해석을 돕습니다." },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-line p-6">
                <card.icon className="text-brand" size={28} strokeWidth={1.75} />
                <h3 className="mt-4 text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="border-b border-line bg-wash py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <h2 className="text-3xl font-bold text-ink">Features</h2>
          <p className="mt-2 max-w-2xl text-ink-2">MethodosBasic-LT_V4-Le1 프로그램에 포함된 핵심 기능입니다.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {FEATURES.map((f) => (
              <article key={f.title} className="rounded-xl border border-line bg-white p-5">
                <h3 className="font-semibold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="desktop" className="border-b border-line bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">Desktop only</p>
          <h2 className="mt-2 text-3xl font-bold text-ink">One way to work: on your machine</h2>
          <div className="mt-8 max-w-2xl rounded-2xl border border-line p-6">
            <HardDrive className="text-brand" size={26} />
            <h3 className="mt-3 text-lg font-semibold">Methodos Basic Desktop</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-2">
              <li>· 포터블 exe로 오프라인 실행</li>
              <li>· 데이터는 PC에 유지 (exe 옆 Data 폴더)</li>
              <li>· Python 엔진·예제·Chromium 런타임 동봉</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="download-preview" className="bg-wash py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <h2 className="text-3xl font-bold text-ink">Ready to download?</h2>
          <p className="mt-2 text-ink-2">Windows 포터블과 macOS ZIP을 선택하세요.</p>
          <div className="mt-8">
            <DownloadCards compact />
          </div>
        </div>
      </section>
    </main>
  );
}
