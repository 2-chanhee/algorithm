function solution(n) {
  return String(n)
    .split("")
    .reduce((acc, cur) => {
      return (acc += parseInt(cur));
    }, 0);
}
