function solution(s, n) {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    // 소문자
    if (lowerAlphabet.includes(s[i])) {
      answer += lowerAlphabet[(n + lowerAlphabet.indexOf(s[i])) % 26];
      continue;
    }
    // 대문자
    else {
      answer += upperAlphabet[(n + upperAlphabet.indexOf(s[i])) % 26];
      continue;
    }
  }
  return answer;
}
