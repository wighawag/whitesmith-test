---
id: "1-001"
issue: 1
title: "Create a hello world CLI in TypeScript"
depends_on: []
---

## Description
Set up a TypeScript project and create a CLI entry point that prints "hello world" to stdout when executed. This involves:

1. Adding TypeScript and related dev dependencies to `package.json`.
2. Creating a `tsconfig.json` with appropriate compiler options.
3. Creating a `src/index.ts` entry point that prints "hello world".
4. Configuring `package.json` with a `build` script, a `start` script, and a `bin` entry so the CLI can be executed.
5. Updating `.gitignore` to exclude the build output directory (`dist/`).

## Acceptance Criteria
- Running `pnpm build` compiles the TypeScript source without errors.
- Running `pnpm start` (or `node dist/index.js`) prints exactly `hello world` to stdout.
- A `bin` field is configured in `package.json` so the package can be used as a CLI (e.g., `npx whitesmith-test` prints "hello world").
- The compiled output directory (`dist/`) is excluded from version control via `.gitignore`.
- TypeScript strict mode is enabled in `tsconfig.json`.

## Implementation Notes
- Use `typescript` as a dev dependency (add it to `package.json`).
- Create `tsconfig.json` at the project root with:
  - `"strict": true`
  - `"outDir": "dist"`
  - `"rootDir": "src"`
  - `"target": "ES2020"` or later
  - `"module": "Node16"` or `"NodeNext"`
- Create `src/index.ts` with a shebang (`#!/usr/bin/env node`) and `console.log("hello world");`.
- Update `package.json`:
  - Set `"main": "dist/index.js"`
  - Add `"bin": { "whitesmith-test": "dist/index.js" }`
  - Add `"scripts": { "build": "tsc", "start": "node dist/index.js" }`
  - Add `typescript` to `devDependencies`
- Add `dist/` to `.gitignore`.
- Use the existing `pnpm` package manager (`packageManager` field is already set).
