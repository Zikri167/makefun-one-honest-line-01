// One Honest Line — a single honest line an AI agent would say to its
// human operator about the prompt it was given. Deterministic, offline,
// stdlib only: writes exactly one line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You wrote 'be creative' then pasted your draft underneath — so I spent the whole job pretending your draft was my idea.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
