#!/usr/bin/env node

import gameEngine from '../engine.js';

import {
  getRandomNumber,
  maximumNumberOfRounds,
} from '../cli.js';

const min = 1;
const max = 100;

const calculateGCD = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const buildRoundsGcd = (roundsCount = maximumNumberOfRounds) => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const firstNumber = getRandomNumber(min, max);
    const secondNumber = getRandomNumber(min, max);
    const gcd = calculateGCD(firstNumber, secondNumber).toString();

    rounds.push([`${firstNumber} ${secondNumber}`, gcd.toString()]);
  }

  return rounds;
};

const runGcdGame = (roundsCount = maximumNumberOfRounds) => {
  const rounds = buildRoundsGcd(roundsCount);

  return gameEngine('Find the greatest common divisor of given numbers.', rounds);
};

export default runGcdGame;
