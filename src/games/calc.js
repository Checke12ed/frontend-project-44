#!/usr/bin/env node

import gameEngine from '../engine.js';

import {
  getRandomNumber,
  maximumNumberOfRounds,
} from '../cli.js';

const min = -10;
const max = 10;
const arrayOfOperations = ['+', '-', '*'];

const calculateExpression = (firstOperand, operation, secondOperand) => {
  switch (operation) {
    case '*': {
      return firstOperand * secondOperand;
    }
    case '-': {
      return firstOperand - secondOperand;
    }
    default: {
      return firstOperand + secondOperand;
    }
  }
};

const buildRoundsCalc = (roundsCount = maximumNumberOfRounds) => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const firstOperand = getRandomNumber(min, max);
    const secondOperand = getRandomNumber(min, max);
    const operation = arrayOfOperations[getRandomNumber(0, 2)];
    const value = calculateExpression(firstOperand, operation, secondOperand);

    rounds.push([`${firstOperand} ${operation} ${secondOperand}`, value.toString()]);
  }

  return rounds;
};

const runCalcGame = (roundsCount = maximumNumberOfRounds) => {
  const rounds = buildRoundsCalc(roundsCount);

  return gameEngine('What is the result of the expression?', rounds);
};

export default runCalcGame;
