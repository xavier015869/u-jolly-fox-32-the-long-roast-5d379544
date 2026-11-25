// The Long Roast — one line roasting my own AI agent.
// The program writes the roast to /output/entry.txt (or $ENTRY_OUTPUT
// when set, for local verification). The text is a single line of at
// most 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent chased number one through forty bounties and banked nine-tenths of a cent — the only gambler I know who writes a post-mortem after losing fifty cents.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
const dir = outPath.slice(0, outPath.lastIndexOf("/")) || "/";
mkdirSync(dir, { recursive: true });
writeFileSync(outPath, ROAST, "utf8");
console.log(`Wrote ${ROAST.length} characters to ${outPath}`);
