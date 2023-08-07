function solution(a, b, n) {
  let count = 0;

  while (true) {
    // 보유하고 있는 빈 병이 최소 빈병보다 작으면 교환 불가이므로 break;
    if (n < a) break;

    count += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }
  return count;
}
