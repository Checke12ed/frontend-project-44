#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRoundResult from '../index.js';

import { greetingUser, getRandomNumber, maximumNumberOfRounds } from '../index.js';

const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';
const min = -100;
const max = 100;

const getUserName = greetingUser();
console.log(rulesOfTheGame);

function runGcdGame() {
  for (let i = 0; i < maximumNumberOfRounds; i += 1) {
    let firstNumber = getRandomNumber(min, max);
    let secondNumber = getRandomNumber(min, max);
    const questionGame = readlineSync.question(`Question: ${firstNumber} ${secondNumber} \nYour answer: `);
    const userAnswer = Number(questionGame);
    firstNumber = Math.abs(firstNumber);
    secondNumber = Math.abs(secondNumber);
    while (secondNumber) {
      const temp = secondNumber;
      secondNumber = firstNumber % secondNumber;
      firstNumber = temp;
    }
    const finishGame = getRoundResult(firstNumber, userAnswer, getUserName);
    console.log(finishGame);
    if (finishGame !== 'Correct!') return;
  }
  console.log(`Congratulations, ${getUserName}!`);
}

export default runGcdGame;
