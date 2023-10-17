#!/usr/bin/env node
import readlineSync from 'readline-sync';

import getRoundResult from '../index.js';

import {
  sayGreeting,
  getRandomNumber,
  maximumNumberOfRounds,
} from '../cli.js';

const rulesOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 2;
const max = 200;
const getUserName = sayGreeting();
console.log(rulesOfTheGame);

function isPrime(number) {
  if (number === 2) return true;
  let i = 2;
  const limit = Math.sqrt(number);
  while (i <= limit) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
}

function runPrimeGame() {
  for (let i = 0; i < maximumNumberOfRounds; i += 1) {
    const question = getRandomNumber(min, max);
    const questionGame = readlineSync.question(`Question: ${question} \nYour answer: `);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    const finishGame = getRoundResult(correctAnswer, questionGame, getUserName);
    console.log(finishGame);
    if (finishGame !== 'Correct!') return;
  }
  console.log(`Congratulations, ${getUserName}!`);
}

export default runPrimeGame;
