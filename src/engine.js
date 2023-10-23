import readlineSync from 'readline-sync';

import {
  sayGreeting,
} from './cli.js';

const playRound = (round) => {
  console.log(`Question: ${round[0]}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === round[1]) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${round[1]}'.`);
  return false;
};

const gameEngine = (description, rounds) => {
  const username = sayGreeting();

  console.log(description);

  for (let i = 0; i < rounds.length; i += 1) {
    const isCorrect = playRound(rounds[i]);
    if (!isCorrect) {
      console.log(`Let's try again, ${username}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${username}!`);
  return true;
};

export default gameEngine;
