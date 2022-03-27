function solution(n, m) {
  const gcd_ = (n, m) => {
    // 유클리드 호제법 사용. n % m === 0 -> n이 최대공약수
    if (m === 0) return n;
    else return gcd_(m, n % m);
  };

  // 최대공약수를 구하는 gcd() 재귀호출
  let gcd = gcd_(n, m);
  // 최소공배수 = n * m / 최대공약수
  let lcm = (n * m) / gcd;

  return [gcd, lcm];
}
