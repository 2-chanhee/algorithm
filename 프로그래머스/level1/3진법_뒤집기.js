function solution(n) {
  /**
   * n.toString(n): n진법으로 변환
   * split("").reverse().join(""): split으로 쪼개서 배열로 만듦 -> 뒤집기 -> string으로 합치기
   * parseInt(x, n): x: 변환할 string, n: 현재 진법 -> 10진수로 변환
   */
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}
