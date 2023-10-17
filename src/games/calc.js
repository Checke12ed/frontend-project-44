#!/usr/bin/env node
import readlineSync from 'readline-sync';

import getRoundResult from '../index.js';

import {
  sayGreeting,
  getRandomNumber,
  maximumNumberOfRounds,
} from '../cli.js';

const rulesOfTheGame = 'What is the result of the expression?';
const min = -10;
const max = 10;
const arrayOfOperations = ['+', '-', '*'];
const getUserName = sayGreeting();
console.log(rulesOfTheGame);

function runCalcGame() {
  for (let i = 0; i < maximumNumberOfRounds; i += 1) {
    const firstOperand = getRandomNumber(min, max);
    const secondOperand = getRandomNumber(min, max);
    const operation = arrayOfOperations[getRandomNumber(0, 2)];
    const questionGame = readlineSync.question(`Question: ${firstOperand} ${operation} ${secondOperand} \nYour answer: `);
    let correctAnswer = 0;
    switch (operation) {
      case arrayOfOperations[0]:
        correctAnswer = firstOperand + secondOperand;
        break;
      case arrayOfOperations[1]:
        correctAnswer = firstOperand - secondOperand;
        break;
      case arrayOfOperations[2]:
        correctAnswer = firstOperand * secondOperand;
        break;
      default:
    }
    const userAnswer = Number(questionGame);
    const finishGame = getRoundResult(correctAnswer, userAnswer, getUserName);
    console.log(finishGame);
    if (finishGame !== 'Correct!') return;
  }
  console.log(`Congratulations, ${getUserName}!`);
}

export default runCalcGame;
