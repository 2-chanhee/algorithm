function solution(array) {
  return array
    .join("")
    .split("")
    .filter((el) => el === "7").length;
}
