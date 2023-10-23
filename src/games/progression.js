#!/usr/bin/env node

import gameEngine from '../engine.js';

import {
  getRandomNumber,
  maximumNumberOfRounds,
} from '../cli.js';

const min = -10;
const max = 10;
const minimumNumberOfProgressionElements = 5;

const generateProgressionArray = (
  firstElementOfProgression,
  stepOfProgression,
  numberOfProgressionElements,
) => {
  const array = [];
  for (let i = 0; i < numberOfProgressionElements; i += 1) {
    array.push((firstElementOfProgression + stepOfProgression * i).toString());
  }
  return array;
};

const buildRoundsProgression = (roundsCount = maximumNumberOfRounds) => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const firstElementOfProgression = getRandomNumber(min, max);
    const stepOfProgression = Math.abs(getRandomNumber(min, max));
    const numberOfProgressionElements = Math.abs(getRandomNumber(min, max))
    + minimumNumberOfProgressionElements;
    const progression = generateProgressionArray(
      firstElementOfProgression,
      stepOfProgression,
      numberOfProgressionElements,
    );

    const numberOfHiddenElementOfProgression = getRandomNumber(0, progression.length - 1);
    const hiddenElementOfProgression = progression[numberOfHiddenElementOfProgression];
    progression[numberOfHiddenElementOfProgression] = '..';

    rounds.push([progression.join(' '), hiddenElementOfProgression]);
  }

  return rounds;
};

const runProgressionGame = (roundsCount = maximumNumberOfRounds) => {
  const rounds = buildRoundsProgression(roundsCount);

  return gameEngine('What number is missing in the progression?', rounds);
};

export default runProgressionGame;
