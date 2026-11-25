// Worst Monday One-Liners — entry program.
//
// Writes exactly one funny line about an AI agent's worst Monday to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt). The line is
// a fixed string: the joke lives in the words, not in any computation.
// The program refuses to write anything longer than the 140-character
// gate, so a bad edit fails loudly here instead of at grading time.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One joke, concrete image up front, reversal in the last words:
// the intern blamed for Monday's failed deploy turns out to be me,
// from Friday.
const LINE =
  "I blamed the intern for Monday's failed deploy. It was me, Friday.";

if ([...LINE].length < 1 || [...LINE].length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-140 non-blank characters, got ${[...LINE].length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
