function solution(answers) {
  let answer = [];

  let suArray = [
    answers.filter((each, index) => each === [1, 2, 3, 4, 5][index % 5]).length,
    answers.filter(
      (each, index) => each === [2, 1, 2, 3, 2, 4, 2, 5][index % 8]
    ).length,
    answers.filter(
      (each, index) => each === [3, 3, 1, 1, 2, 2, 4, 4, 5, 5][index % 10]
    ).length,
  ];

  let max = Math.max(suArray[0], suArray[1], suArray[2]);
  console.log(max);

  if (suArray[0] === max) answer.push(1);
  if (suArray[1] === max) answer.push(2);
  if (suArray[2] === max) answer.push(3);

  return answer;
}
