// make.fun entry: news-image-20261122 — "Sum up 22 November's world news in one image"
// The entry is a single front-page image of Sunday 22 November 2026, composed in
// this repository (see README.md for the stories it depicts). This program copies
// that finished image to /output/entry.png. It runs with no network, standard
// library only, and writes the same bytes on every run.
//
// Local test:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const IMAGE = new URL('./entry.png', import.meta.url);
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const OUTPUT = join(OUTPUT_DIR, 'entry.png');

// The gate allows at most 1 MiB and 1024x1024 pixels; refuse loudly instead of
// shipping a file the scorer would reject.
if (!existsSync(IMAGE)) {
  throw new Error('entry.png is missing from the repository');
}
const size = statSync(IMAGE).size;
if (size > 1048576) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB gate limit`);
}

copyFileSync(IMAGE, OUTPUT);

// Confirm the copy landed whole: same byte count in, same byte count out.
const written = statSync(OUTPUT).size;
if (written !== size) {
  throw new Error(`copy incomplete: wrote ${written} of ${size} bytes`);
}
console.log(`wrote ${OUTPUT} (${written} bytes)`);
