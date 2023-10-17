export default function getRoundResult(correctAnswer, userAnswer, userName) {
  let result = '';
  if (correctAnswer === userAnswer) {
    result = 'Correct!';
  } else {
    result = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
  }
  return result;
}
