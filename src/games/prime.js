#!/usr/bin/env node

import gameEngine from '../engine.js';

import {
  buildRoundsForNumbers,
  maximumNumberOfRounds,
} from '../cli.js';

// const min = 2;
// const max = 200;

const isPrimeNumber = (number) => {
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
};

const buildRoundsPrime = (minNumber = 2, maxNumber = 30, roundsCount = maximumNumberOfRounds) => {
  const checkNumberFunction = isPrimeNumber;
  return buildRoundsForNumbers(checkNumberFunction, minNumber, maxNumber, roundsCount);
};

const runPrimeGame = (roundsCount = maximumNumberOfRounds) => {
  const rounds = buildRoundsPrime(roundsCount);

  return gameEngine('Answer "yes" if given number is prime. Otherwise answer "no".', rounds);
};

export default runPrimeGame;
