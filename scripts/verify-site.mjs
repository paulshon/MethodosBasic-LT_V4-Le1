import { spawn, spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const site = path.join(root, "..");
const base = "http://127.0.0.1:3000";

function run(cmd, args) {
  const r = spawnSync(cmd, args, { cwd: site, stdio: "inherit", shell: true });
  if (r.status !== 0) process.exit(r.status ?? 1);
}

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function httpStatus(url) {
  const res = await fetch(url, { redirect: "manual" });
  return res.status;
}

console.log("→ npm run typecheck");
run("npm", ["run", "typecheck"]);

console.log("→ npm run build");
run("npm", ["run", "build"]);

const localReleases =
  process.env.LOCAL_RELEASES_DIR ||
  "C:/Users/saran/OneDrive/Desktop/통계 개발/methodos-basic-사이트 구축/MethodosBasic-LT-7-6개월";

const child = spawn("npm", ["run", "start"], {
  cwd: site,
  shell: true,
  stdio: "ignore",
  env: {
    ...process.env,
    LOCAL_RELEASES_DIR: localReleases,
  },
});

let failed = false;

try {
  await wait(6000);
  const pages = ["/", "/download", "/about", "/login"];
  for (const p of pages) {
    const status = await httpStatus(base + p);
    const pass = status === 200;
    console.log(pass ? "  ✓" : "  ✗", p, status);
    if (!pass) failed = true;
  }

  const dl = await httpStatus(`${base}/api/download/win-portable`);
  const dlOk = dl === 200 || dl === 302;
  console.log(dlOk ? "  ✓" : "  ✗", "/api/download/win-portable", dl);
  if (!dlOk) failed = true;
} catch (e) {
  console.error(e);
  failed = true;
} finally {
  if (child.pid) {
    try {
      spawnSync("taskkill", ["/PID", String(child.pid), "/T", "/F"], { shell: true, stdio: "ignore" });
    } catch {
      child.kill();
    }
  }
}

if (failed) {
  console.error("\nVERIFY FAILED");
  process.exit(1);
}
console.log("\nVERIFY OK");
