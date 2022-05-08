function solution(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") count++;
    else count--;

    if (count < 0) return false;
  }

  return count === 0 ? true : false;
}

function solution(s) {
  const stack = [];

  for (const item of s) {
    if (item === "(") stack.push(item);
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}
