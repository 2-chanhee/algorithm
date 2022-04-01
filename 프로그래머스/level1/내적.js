function solution(a, b) {
  let answer = 0;
  a.forEach((e, i) => {
    answer += e * b[i];
  });
  return answer;
}
