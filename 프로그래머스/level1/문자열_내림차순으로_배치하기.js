function solution(s) {
  var answer = "";
  s = s.split("").sort().reverse().join("");
  return s;
}
