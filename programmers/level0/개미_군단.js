function solution(hp) {
  const j_c = parseInt(hp / 5);
  const j_n = hp % 5;

  if (j_n === 0) return j_c;

  const b_c = parseInt(j_n / 3);
  const b_n = j_n % 3;

  if (b_n === 0) return j_c + b_c;

  return j_c + b_c + b_n;
}
