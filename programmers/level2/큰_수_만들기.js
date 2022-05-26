function solution(number, k) {
  const stack = [];

  for (const num of number) {
    while (k > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      k -= 1;
    }
    stack.push(num);
  }
  // "6543".. 과 같이 위 while문을 만족하지 못할 경우 pop()없이 그대로 나온다. 이럴 경우 맨 뒤에서 k만큼 제거.
  return stack.join("").slice(0, stack.length - k);
}
