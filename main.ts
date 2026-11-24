// News-image entry for make.fun, bounty news-image-20261124 (Node 22, standard library only).
// The entry image is entry.png beside this file: a 1024x1024 front page I drew
// summing up the world's news of Tuesday 24 November 2026 (Nvidia, NATO space,
// Kyiv, Libya, Indonesia, Grok). This program copies it to /output/entry.png.
// It runs with no network and writes the same bytes every time.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
