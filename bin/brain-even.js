#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcome, congratulation } from '../src/callbacks.js';
import { name } from '../src/cli.js';

export default function isEven() {
  welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const number = Math.round(Math.random() * 100);
    console.log(`${'Question:'} ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (number % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      count += 1;
    } else if (number % 2 !== 0 && answer === 'no') {
      console.log('Correct');
      count += 1;
    } else if (answer === 'yes' && number % 2 !== 0) {
      console.log(`${'\'yes\' is wrong answer ;(. Correct answer was \'no\'. \nLet\'s try again,'} ${name}!`);
      break;
    } else if (answer === 'no' && number % 2 === 0) {
      console.log(`${'\'no\' is wrong answer ;(. Correct answer was \'yes\'. \nLet\'s try again,'} ${name}!`);
      break;
    }
  }
  if (count === 3) {
    congratulation();
  }
}
isEven();
