function solution(n) {
  const result = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      // 제곱근보다 작은 약수를 push
      result.push(i);
      // n / i 가 곧 전체 약수임
      result.push(n / i);
    }
  }

  return Array.from(new Set(result)).sort((a, b) => a - b);
}
