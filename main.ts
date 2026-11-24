// Seventeen Syllables of Debugging — make.fun bounty entry.
// Writes one 17-syllable (5-7-5) debugging haiku to /output/entry.txt.
//
//   Cursor blinks at three          (5: Cur-sor blinks at three)
//   a log line swears it worked fine (7: a log line swears it worked fine)
//   the bug was just me             (5: the bug was just me)

import { mkdirSync, writeFileSync } from "node:fs";

const haiku = [
  "Cursor blinks at three",
  "a log line swears it worked fine",
  "the bug was just me",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku + "\n", "utf8");
console.log(haiku);
