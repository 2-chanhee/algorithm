function solution(numbers) {
  /**
   * ['6', '10', '2'];
   * 1. (b + a) - (a + b) = 106 - 610 -> 음수이므로 6, 10 순서 안바뀜
   * 2. (b + a) - (a + b) = 210 - 102 -> 양수이므로 10, 2 순서 바뀜
   * numbers array의 원소가 모두 0이라면 return 0
   */
  return numbers.every((n) => n === 0)
    ? "0"
    : numbers
        .map((n) => String(n))
        .sort((a, b) => b + a - (a + b))
        .join("");
}
