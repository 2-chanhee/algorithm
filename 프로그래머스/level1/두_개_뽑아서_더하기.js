function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      // n[i]+n[j]의 합이 같거나, index가 같다면 continue
      if (answer.includes(numbers[i] + numbers[j]) || i === j) continue;
      answer.push(numbers[i] + numbers[j]);
    }
  }
  return answer.sort((a, b) => a - b); // 오름차순 정렬
}
