import readlineSync from 'readline-sync';

export const maximumNumberOfRounds = 3;

// Random number between {min} and {max}

export function getRandomNumber(min, max) {
  const x = Math.floor((Math.random() * (max - min)) + min);
  return x;
}

export function greetingUser() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export function getRoundResult(correctAnswer, userAnswer, userName) {
  let result = '';
  if (correctAnswer === userAnswer) {
    result = 'Correct!';
  } else {
    result = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
  }
  return result;
}
