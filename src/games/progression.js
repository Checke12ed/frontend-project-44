#!/usr/bin/env node
import readlineSync from 'readline-sync';

import getRoundResult from '../index.js';

import {
  sayGreeting,
  getRandomNumber,
  maximumNumberOfRounds,
} from '../cli.js';

const rulesOfTheGame = 'What number is missing in the progression?';
const min = -10;
const max = 10;
const minimumNumberOfProgressionElements = 5;
const getUserName = sayGreeting();
console.log(rulesOfTheGame);

function runProgressionGame() {
  for (let i = 0; i < maximumNumberOfRounds; i += 1) {
    const firstElementOfProgression = getRandomNumber(min, max);
    const stepOfProgression = Math.abs(getRandomNumber(min, max));
    const numberOfProgressionElements = Math.abs(getRandomNumber(min, max))
    + minimumNumberOfProgressionElements;
    const numberOfHiddenElementOfProgression = getRandomNumber(1, numberOfProgressionElements);
    let progression = '';
    let hiddenElementOfProgression = 0;
    if (numberOfHiddenElementOfProgression === 1) {
      hiddenElementOfProgression = firstElementOfProgression;
      progression += '..';
    } else {
      progression += `${firstElementOfProgression}`;
    }
    for (let j = 2; j <= numberOfProgressionElements; j += 1) {
      const elementOfProgression = firstElementOfProgression + stepOfProgression * (j - 1);
      if (numberOfHiddenElementOfProgression === j) {
        hiddenElementOfProgression = elementOfProgression;
        progression += ' ..';
      } else {
        progression += ` ${elementOfProgression}`;
      }
    }
    const questionGame = readlineSync.question(`Question: ${progression} \nYour answer: `);
    const userAnswer = Number(questionGame);
    const finishGame = getRoundResult(hiddenElementOfProgression, userAnswer, getUserName);
    console.log(finishGame);
    if (finishGame !== 'Correct!') return;
  }
  console.log(`Congratulations, ${getUserName}!`);
}

export default runProgressionGame;
