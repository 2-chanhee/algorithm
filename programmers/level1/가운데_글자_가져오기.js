function solution(s) {
  let sLen = s.length / 2;

  if (s.length % 2 === 0) return s.substring(sLen - 1, sLen + 1);
  return s.substring(sLen, sLen + 1);
}
