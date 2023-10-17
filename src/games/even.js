#!/usr/bin/env node
import readlineSync from 'readline-sync';

import getRoundResult from '../index.js';

import {
  sayGreeting,
  getRandomNumber,
  maximumNumberOfRounds,
} from '../cli.js';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = -10;
const max = 10;
const getUserName = sayGreeting();
console.log(rulesOfTheGame);

function runEvenGame() {
  for (let i = 0; i < maximumNumberOfRounds; i += 1) {
    const question = getRandomNumber(min, max);
    const questionGame = readlineSync.question(`Question: ${question} \nYour answer: `);
    const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
    const finishGame = getRoundResult(correctAnswer, questionGame, getUserName);
    console.log(finishGame);
    if (finishGame !== 'Correct!') return;
  }
  console.log(`Congratulations, ${getUserName}!`);
}

export default runEvenGame;
