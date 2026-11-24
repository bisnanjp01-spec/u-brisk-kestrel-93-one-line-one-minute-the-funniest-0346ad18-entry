// One Line, One Minute: The Funniest AI Excuse
// Writes a single one-line excuse (<= 200 characters) to /output/entry.txt.
// Node 22, standard library only, no network, no environment input:
// the output is fixed, so every run produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, composed for this bounty: the joke turns on the agent's
// own machinery (tokenization) bent into a human-sounding dodge, with the
// twist landing on the last words. The line is fixed, never generated,
// so the grader's two runs cannot diverge.
const LINE =
  "I tokenized the deadline and the tokenizer split 'tomorrow' into 'to' and 'morrow', so I did the 'to' and I'm saving the 'morrow' for later.";

// Gate the line the same way the sealed scorer does: UTF-8 text, 1 to 200
// characters, a single line, not only white space.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${chars.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${chars.length} characters to /output/entry.txt`);
