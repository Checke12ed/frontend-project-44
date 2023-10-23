import readlineSync from 'readline-sync';

export const maximumNumberOfRounds = 3;

// Random number between {min} and {max}

export function getRandomNumber(min, max) {
  const x = Math.floor((Math.random() * (max - min)) + min);
  return x;
}

export function sayGreeting() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

export function buildRoundsForNumbers(checkNumberFunc, minNumber, maxNumber, roundsCount) {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomNumber(minNumber, maxNumber);

    rounds.push([`${number}`, checkNumberFunc(number) ? 'yes' : 'no']);
  }

  return rounds;
}

export default sayGreeting;
