import { readFileSync } from "node:fs";
import path from "node:path";

function loadLicenseNotice(): string {
  const file = path.join(process.cwd(), "content", "license-notice.txt");
  return readFileSync(file, "utf8");
}

export default function AboutPage() {
  const text = loadLicenseNotice();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 lg:px-6">
      <h1 className="font-myeongjo text-2xl font-bold text-ink">About Methodos</h1>
      <p className="mt-2 text-sm text-ink-2">License notices and third-party attributions (English).</p>
      <pre className="mt-6 whitespace-pre-wrap break-words font-sans text-[9px] leading-[1.45] text-ink-2">
        {text}
      </pre>
    </div>
  );
}
