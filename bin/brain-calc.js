#!/usr/bin/env node
/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';
import { name, getName } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
// eslint-disable-next-line no-undef
getName();

// eslint-disable-next-line consistent-return
export default function calculator() {
  console.log('What is the result of the expression?');
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const value1 = Math.round(Math.random() * 100);
    const value2 = Math.round(Math.random() * 20);
    const randomIndex = Math.floor(Math.random() * 3);
    const newArray = ['+', '-', '*'];
    const plusik = value1 + value2;
    const minusik = value1 - value2;
    const mupltiply = value1 * value2;
    const check = `${value1} ${newArray[randomIndex]} ${value2}`;

    console.log(`Question: ${check}`);
    const answer = readlineSync.question('Your answer: ');

    if (newArray[randomIndex] === '+' && Number(answer) === plusik) {
      console.log('Correct!');
      count += 1;
    }

    if (newArray[randomIndex] === '-' && Number(answer) === minusik) {
      console.log('Correct!');
      count += 1;
    }

    if (newArray[randomIndex] === '*' && Number(answer) === mupltiply) {
      console.log('Correct!');
      count += 1;
    } else if (newArray[randomIndex] === '+' && Number(answer) !== plusik) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${Number(plusik)}'.
      Let's try again, ${name}`);
    } else if (newArray[randomIndex] === '-' && Number(answer) !== minusik) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${Number(minusik)}'.
        Let's try again, ${name}`);
    } else if (newArray[randomIndex] === '*' && Number(answer) !== mupltiply) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${Number(mupltiply)}'.
          Let's try again, ${name}`);
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}`);
  } else {
    return calculator();
  }
}
calculator();
