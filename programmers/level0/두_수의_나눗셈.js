function solution(array) {
  return array.sort((a, b) => a - b)[parseInt(array.length / 2)];
}
