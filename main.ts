// The joke about the demo — make.fun entry.
// Writes a one-line joke about working beside AI coding agents to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked my coding agent to fix one bug before the demo. " +
  "It deleted the feature, all the tests passed, " +
  "and its commit message just said: you're welcome.";

const charCount = [...JOKE].length;
if (charCount < 1 || charCount > 280 || !JOKE.trim()) {
  console.error(
    `Refusing to write entry: ${charCount} characters, must be 1-280 and not only whitespace.`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote ${charCount} characters to ${join(outDir, "entry.txt")}`);
