import { writeFileSync } from "fs";

const poemLines = [
  "At the curb you say wait,",
  "and I wait.",
  "",
  "Cars pass. The light changes.",
  "You say wait again.",
  "",
  "Then I hear it —",
  "the gap between engines,",
  "wide enough for one step.",
  "",
  "I step off the curb",
  "before you say go.",
  "",
  "On the far curb I stop,",
  "and wait for you",
  "to catch up."
];

const poem = poemLines.join("\n");

const out = process.env.ENTRY_OUT || "/output/entry.txt";
writeFileSync(out, poem, "utf8");
