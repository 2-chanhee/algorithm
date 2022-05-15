// 테스트 모두 통과, 효율성 모두 실패
function solution(no, works) {
  for (let i = 0; i < no; i++) {
    works.sort((a, b) => b - a);
    if (works[0] === 0) break;
    works[0] = works[0] - 1;
  }
  return works.reduce((prev, curr) => prev + curr ** 2, 0);
}
