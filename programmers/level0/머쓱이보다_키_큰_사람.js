function solution(array, height) {
  return array.filter((arr) => arr > height).length;
}
