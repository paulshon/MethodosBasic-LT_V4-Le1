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

async function httpRedirectLocation(url) {
  const res = await fetch(url, { redirect: "manual" });
  return { status: res.status, location: res.headers.get("location") || "" };
}

console.log("→ npm run typecheck");
run("npm", ["run", "typecheck"]);

console.log("→ npm run build");
run("npm", ["run", "build"]);

const child = spawn("npm", ["run", "start"], {
  cwd: site,
  shell: true,
  stdio: "ignore",
  env: {
    ...process.env,
    LOCAL_RELEASES_DIR: "",
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

  const { status: dl, location: dlLoc } = await httpRedirectLocation(`${base}/api/download/win-portable`);
  const dlOk = dl === 302 && dlLoc.includes("drive.google.com");
  console.log(dlOk ? "  ✓" : "  ✗", "/api/download/win-portable", dl, dlLoc.slice(0, 60));
  if (!dlOk) failed = true;

  for (const id of ["mac-x64-dmg", "mac-arm64-dmg"]) {
    const { status, location } = await httpRedirectLocation(`${base}/api/download/${id}`);
    const ok = status === 302 && location.includes("drive.google.com");
    console.log(ok ? "  ✓" : "  ✗", `/api/download/${id}`, status, location.slice(0, 60));
    if (!ok) failed = true;
  }
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
