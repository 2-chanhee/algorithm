function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((prev, curr) => prev + Number(curr), 0);
}
