function solution(arr, divisor) {
  var answer = [];

  arr.forEach((each) => {
    if (each % divisor === 0) {
      answer.push(each);
    }
  });
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
