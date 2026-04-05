#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = process.argv[2];
if (name) {
    console.log(`hello ${name}`);
}
else {
    console.log("hello world");
}
