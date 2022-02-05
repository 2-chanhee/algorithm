function solution(arr) {
  return arr.length === 1
    ? [-1]
    : arr.filter((each) => each !== Math.min(...arr));
}
