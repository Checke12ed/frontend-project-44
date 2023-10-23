#!/usr/bin/env node

import gameEngine from '../engine.js';

import {
  buildRoundsForNumbers,
  maximumNumberOfRounds,
} from '../cli.js';

const isEvenNumber = (number) => number % 2 === 0;

const buildRoundsEven = (minNumber = 2, maxNumber = 30, roundsCount = maximumNumberOfRounds) => {
  const checkNumberFunction = isEvenNumber;
  return buildRoundsForNumbers(checkNumberFunction, minNumber, maxNumber, roundsCount);
};

const runEvenGame = (roundsCount = maximumNumberOfRounds) => {
  const rounds = buildRoundsEven(roundsCount);

  return gameEngine('Answer "yes" if the number is even, otherwise answer "no".', rounds);
};

export default runEvenGame;
