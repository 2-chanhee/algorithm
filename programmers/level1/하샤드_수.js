function solution(x) {
  return x %
    String(x)
      .split("")
      .map((x) => parseInt(x))
      .reduce((prev, curr) => prev + curr) ===
    0
    ? true
    : false;
}
