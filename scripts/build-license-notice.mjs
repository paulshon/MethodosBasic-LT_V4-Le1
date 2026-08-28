import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const site = path.join(root, "..");
const leTools = path.resolve(site, "../../../methodos-basic-v2/le-tools");

const header = `Methodos Basic
Research statistical analysis · Version 21.0.0-LT.V4-Le1 · Methodos Lab

The following is the official Non-Commercial Research & Academic Software License (English original).

This application is built with Electron, licensed under the MIT License. Copyright © OpenJS Foundation.

`;

function loadJson(name) {
  return JSON.parse(fs.readFileSync(path.join(leTools, name), "utf8"));
}

const sections = [...loadJson("about-sections-base.en.json"), ...loadJson("about-sections.en.json")];
let text = header;
for (const s of sections) {
  text += `${s.heading}\n\n`;
  for (const p of s.body) text += `${p}\n\n`;
}
text += "\n© Methodos Lab. All Rights Reserved.\n";

const out = path.join(site, "content", "license-notice.txt");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, text);
console.log("Wrote", out, text.length, "chars");
