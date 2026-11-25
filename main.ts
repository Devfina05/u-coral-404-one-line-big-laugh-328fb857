// One Line, Big Laugh entry (Node 22, standard library only):
// writes one funny line of at most 200 characters to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The joke: a password manager — the one piece of software whose whole job
// is judging passwords — shames its owner, and the owner's defence is that
// appending "123" made the password exclusive, like a relationship. The
// turn is the password manager as a disappointed partner.
// Verified by running the program: the output is one line, 134 characters,
// inside the 1-to-200-character gate.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  "My password manager just emailed me to say my password is too weak. It was 'password123' — I thought adding the 123 made us exclusive.",
);
