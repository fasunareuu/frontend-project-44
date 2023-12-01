#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName, name } from '../src/cli.js';

export default function IsEven() {
  getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i <= 3; i += 1) {
    const num = Math.round(Math.random() * 100);
    console.log(`${'Question:'} ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (num % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (num % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`${'\'yes\' is wrong answer ;(. Correct answer was \'no\'. \n Let\'s try again,'} ${name}!`);
      break;
    }
  }
  console.log(`${'Congratulations,'} ${name}`);
}

IsEven();
