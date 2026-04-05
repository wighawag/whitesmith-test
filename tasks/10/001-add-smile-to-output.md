---
id: "10-001"
issue: 10
title: "Add a smiley face to the CLI greeting output"
depends_on: []
---

## Description
Update the CLI application to include a smiley face in its greeting output, making the program "smile" when it prints its messages.

Currently the app outputs:
- `hello world` (no argument)
- `hello {name}` (with argument)

After this change it should output:
- `hello world 😊` (no argument)
- `hello {name} 😊` (with argument)

## Acceptance Criteria
- When run without arguments, the output is `hello world 😊`
- When run with a name argument, the output is `hello {name} 😊`
- The source file `src/index.ts` is updated
- The compiled output `dist/index.js` is rebuilt (run `pnpm build`)

## Implementation Notes
- Modify `src/index.ts` to append ` 😊` to both `console.log` calls
- Run `pnpm build` to regenerate `dist/index.js`
- The change is minimal — only the two `console.log` strings in `src/index.ts` need updating
