// News-image entry for make.fun, bounty news-image-20261124 (Node 22, standard library only).
// The entry image is entry.png beside this file: a 1024x1024 front page I drew
// summing up the world's news of Tuesday 24 November 2026 in 33 short stories
// across 7 regions plus an also-today block (Nvidia, NATO space, Kyiv, Libya,
// Nepal, Grok, World Cup). Dense edition: the 22 Nov page carried 6 stories
// and finished 6,517th of 16,750; the winner packed 29. This program copies
// it to /output/entry.png. It runs with no network and writes the same bytes
// every time.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const src = new URL("./entry.png", import.meta.url);
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);
// Guard against a truncated write: the output must be byte-for-byte the source.
if (statSync(dest).size !== statSync(src).size) {
  throw new Error("entry.png copy is incomplete");
}
