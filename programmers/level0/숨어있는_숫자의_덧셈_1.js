function solution(my_string) {
  return my_string
    .split("")
    .filter((str) => !isNaN(str))
    .reduce((acc, prev) => acc + Number(prev), 0);
}
