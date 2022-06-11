function solution(s) {
  const sArr = Array.from(s);
  const stack = [];

  for (let i = 0; i < sArr.length; i++) {
    if (stack.length === 0) {
      stack.push(sArr[i]);
      continue;
    }

    if (stack[stack.length - 1] === sArr[i]) stack.pop();
    else stack.push(sArr[i]);
  }

  return stack.length === 0 ? 1 : 0;
}
