---
id: "17-001"
issue: 17
title: "Add firework ASCII animation that reveals a random animal"
depends_on: []
---

## Description

Add a firework ASCII art animation to the CLI that launches a firework upward and then explodes to reveal a random animal. The animation should play in the terminal using `console.log` / `console.clear` or ANSI escape sequences, and should run automatically when the CLI is executed (before or after the existing greeting).

The firework animation should consist of:
1. A firework "launching" upward (a short ascending animation).
2. An "explosion" burst effect using ASCII characters (e.g., `*`, `.`, `'`, etc.).
3. The explosion resolves into an ASCII art animal chosen randomly from a predefined set.

This should be implemented entirely with Node.js built-in modules (no new dependencies). The animation should use `setTimeout`/`setInterval` or a simple async delay loop to animate frames in the terminal.

## Acceptance Criteria

- Running `node dist/index.js` (or `pnpm start`) shows a firework animation in the terminal.
- The firework visually "launches" upward through several frames.
- The firework "explodes" into a burst pattern.
- After the explosion, a random ASCII art animal is displayed (at least 3 different animals in the pool, e.g., cat, dog, rabbit, bird).
- The existing greeting (`hello world` / `hello {name}`) is still printed (either before the animation starts or after it completes).
- The project builds successfully with `pnpm build` (no TypeScript errors).
- The `dist/index.js` file is updated with the compiled output.
- No new npm dependencies are added; use only Node.js built-in APIs.

## Implementation Notes

### Files to modify
- `src/index.ts` — Add the firework animation logic and animal ASCII art.

### Approach
1. Define an array of ASCII art animals (at least 3). Each animal should be a multi-line string.
2. Create a `sleep(ms)` helper using `new Promise(resolve => setTimeout(resolve, ms))`.
3. Create an `async` animation function that:
   - Clears the terminal (`console.clear()` or `process.stdout.write('\x1Bc')`).
   - Shows several frames of a firework launching upward (e.g., a `|` character moving from the bottom toward the top of a text block).
   - Shows an explosion frame (e.g., a starburst pattern made of `*`, `·`, `✦`, `✧` characters).
   - Shows the final frame with a randomly selected ASCII art animal.
4. Wrap the existing greeting logic and the animation in an `async main()` function.
5. Keep frame delays reasonable (e.g., 100-200ms per frame) so the animation is visible but doesn't take too long (~2-3 seconds total).
6. Make sure the shebang `#!/usr/bin/env node` stays at the top of the output.
7. After implementing, run `pnpm build` to compile and ensure `dist/index.js` is up to date.

### Example animal ASCII art (suggestions)

```
Cat:
 /\_/\
( o.o )
 > ^ <

Dog:
 / \__
(    @\____
 /         O
/   (_____/
/_____/   U

Rabbit:
 (\(\
 ( -.-)
 o_(")(")

Bird:
   .---.
  /     \
  \.@-@./
  /`\_/`\
 //  _  \\
| \     )|_
/`\_`>  <_/ \
\__/'---'\__/
```
