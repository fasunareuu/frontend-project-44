#!/usr/bin/env node
/* eslint-disable no-unused-vars */
import { name, getName } from './cli.js';

export function welcome() {
  console.log('Welcome to the Brain Games!');
  getName(name);
}

export function congratulation() {
  console.log(`${'Congratulations,'} ${name}!`);
}
