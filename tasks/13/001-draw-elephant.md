---
id: "13-001"
issue: 13
title: "Draw an ASCII art elephant in CLI output"
depends_on: []
---

## Description
Modify the CLI application to draw an ASCII art elephant when run. The elephant should be displayed as part of the console output. The existing greeting functionality (printing "hello world 😊" or "hello {name} 😊") should be preserved alongside the elephant drawing.

## Acceptance Criteria
- Running `node dist/index.js` displays an ASCII art elephant in the console output
- Running `node dist/index.js <name>` also displays the ASCII art elephant along with the personalized greeting
- The elephant ASCII art is recognizable as an elephant
- The project builds successfully with `pnpm build` (no TypeScript errors)
- The existing greeting message is still displayed

## Implementation Notes
- Modify `src/index.ts` to include an ASCII art elephant string and print it to the console using `console.log()`
- The elephant art should be added before or after the existing greeting output
- Use a multi-line template literal or string for the ASCII art
- After modifying `src/index.ts`, ensure the project compiles by running `pnpm build`
- Example elephant ASCII art (implementer may choose any recognizable elephant):
  ```
      ____
     /    \
    | ^  ^ |
    |  ||  |
     \____/
      |  |
     _|  |_
    |      |
    |      |
    |______|
   /|      |\
  / |      | \
 /  |______|  \
    ||    ||
    ||    ||
    ""    ""
  ```
- Keep the implementation simple and consistent with the existing code style
