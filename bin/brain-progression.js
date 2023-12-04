#!/usr/bin/env node
/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';
import { name, getName } from '../src/cli.js';
import { welcome, congratulation } from '../src/callbacks.js';

export default function progressionArithmetic() {
  welcome();
  let count = 0;
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const progressionIndex = Math.floor(Math.random() * 5 + 3); // рандомная индекс прогрессии.
    const randomStart = Math.floor(Math.random() * 10); // начальные число в прогрессии.
    const progressionLength = Math.floor(Math.random() * 5 + 5);
    const randomSecretNumber = Math.floor(Math.random() * progressionLength); //

    const progressionArray = [randomStart]; // пустой массив
    for (let j = 0; j < progressionLength; j += 1) {
      progressionArray.push(progressionArray[progressionArray.length - 1] + progressionIndex);
    }
    const correctAnswer = progressionArray.splice(randomSecretNumber, 1, '..');
    console.log(`Question: ${progressionArray.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === Number(correctAnswer)) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (count === 3) {
    congratulation();
  }
}
progressionArithmetic();
