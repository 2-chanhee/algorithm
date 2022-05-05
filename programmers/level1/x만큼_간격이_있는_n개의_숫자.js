function solution(x, n) {
  var answer = [];
  let tmp = x;

  for (let i = 0; i < n; i++) {
    if (i === 0) answer.push(tmp);
    else answer.push(tmp);

    tmp += x;
  }
  return answer;
}
