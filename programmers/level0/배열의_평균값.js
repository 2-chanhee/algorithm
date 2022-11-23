function solution(numbers) {
  return numbers.reduce((acc, prev) => acc + prev) / numbers.length;
}
