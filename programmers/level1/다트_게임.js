function solution(dartResult) {
  let num = 0;
  let answer = []; // score만 저장하는 배열
  let score = 0;

  for (let i = 0; i < dartResult.length; i++) {
    // 점수인 경우
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      // 10인 경우
      if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
        score = 10;
        i++; // 10은 2자리이므로 +i 추가
      } else {
        // 10 아니면 dartResult[i] 가 score임
        score = dartResult[i];
      }
    }
    // S, D, T, *, #인 경우
    // Single
    else if (dartResult[i] === "S") {
      answer.push(score ** 1);
    }
    // Double
    else if (dartResult[i] === "D") {
      answer.push(score ** 2);
    }
    // Triple
    else if (dartResult[i] === "T") {
      answer.push(score ** 3);
    } else if (dartResult[i] === "*") {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    }
    // 아차상 (#)
    else if (dartResult[i] === "#") {
      answer[answer.length - 1] *= -1;
    }
  }

  return answer.reduce((acc, curr) => acc + curr);
}
