function solution(s) {
  // 숫자 && (길이가 4 또는 6) -> true
  // 숫자가 아니면 false
  return s == parseInt(s) && (s.length === 4 || s.length === 6) ? true : false;
}
