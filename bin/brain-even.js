#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswerCount = 0;

while (correctAnswerCount < 3) {
  let correctAnswer = 'yes';
  let questionEven = 'no';

  // Random number between {-10} and {10}
  const question = Math.round((Math.random() - 0.5) * 20);

  questionEven = (question % 2 === 0);
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if ((questionEven && (userAnswer === 'yes')) || ((!questionEven) && (userAnswer === 'no'))) {
    console.log('Correct!');
    correctAnswerCount += 1;
  } else {
    if (questionEven && (userAnswer !== 'yes')) correctAnswer = 'yes';
    if (!questionEven && (userAnswer !== 'no')) correctAnswer = 'no';
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}
if (correctAnswerCount === 3) console.log(`Congratulations, ${userName}!`);
