---
id: "7-001"
issue: 7
title: "Accept an optional name argument in the CLI"
depends_on: []
---

## Description
Modify the CLI entry point (`src/index.ts`) to accept an optional positional command-line argument representing a name. When a name is provided, the CLI should output `hello <name>`. When no argument is provided, it should fall back to the current behavior and output `hello world`.

## Acceptance Criteria
- Running `whitesmith-test Alice` (or `node dist/index.js Alice`) outputs `hello Alice`.
- Running `whitesmith-test` (or `node dist/index.js`) with no arguments outputs `hello world` (existing behavior preserved).
- The argument is read from `process.argv[2]` (the first user-supplied positional argument).
- The project builds successfully with `pnpm build` (TypeScript compiles without errors).

## Implementation Notes
- The only file that needs modification is `src/index.ts`.
- Use `process.argv[2]` to read the first positional argument. No third-party argument parsing library is needed for this simple case.
- The implementation should look roughly like:
  ```ts
  #!/usr/bin/env node
  const name = process.argv[2];
  if (name) {
    console.log(`hello ${name}`);
  } else {
    console.log("hello world");
  }
  ```
- After modifying `src/index.ts`, run `pnpm build` to regenerate `dist/index.js`. Note that `dist/` is in `.gitignore`, so the compiled output does not need to be committed.
