---
id: "15-001"
issue: 15
title: "Add smell to the CLI greeting output"
depends_on: []
---

## Description
Update the CLI greeting to include a smell-related element, making the output "smell" as requested in the issue. Following the same pattern as previous enhancements (e.g., issue #10 added a smiley face emoji 😊), add a nose/smell emoji to the CLI output so the greeting conveys a smell.

The current output is:
- `hello world 😊` (no argument)
- `hello <name> 😊` (with argument)

The updated output should be:
- `hello world 😊 👃` (no argument)
- `hello <name> 😊 👃` (with argument)

## Acceptance Criteria
- The CLI output includes a smell-related emoji (👃) appended to the greeting message.
- Both the default greeting (`hello world`) and the personalized greeting (`hello <name>`) include the smell emoji.
- The existing smiley face emoji (😊) is preserved.
- The `dist/index.js` file is rebuilt after the source change.

## Implementation Notes
- Modify `src/index.ts` to append a smell emoji (👃) to both `console.log` output lines.
- Run `pnpm build` (or `npx tsc`) to regenerate `dist/index.js`.
- Commit both the source change and the rebuilt dist file, following the existing convention (the repo tracks `dist/index.js`).
- Files to modify: `src/index.ts`, `dist/index.js` (via build).
