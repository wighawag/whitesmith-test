#!/usr/bin/env node
const name = process.argv[2];
if (name) {
  console.log(`hello ${name} 😊`);
} else {
  console.log("hello world 😊");
}
