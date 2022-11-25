function solution(my_string) {
  return my_string
    .split("")
    .filter((str) => !isNaN(str))
    .map((str) => Number(str))
    .sort((a, b) => a - b);
}
