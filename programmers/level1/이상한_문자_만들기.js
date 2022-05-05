function solution(s) {
  let answer = "";
  let index = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == " ") {
      index = 0;
      answer += " ";
      continue;
    }
    if (index % 2 === 0) {
      answer += s.charAt(i).toUpperCase();
      index++;
    } else {
      answer += s.charAt(i).toLowerCase();
      index++;
    }
  }

  return answer;
}
