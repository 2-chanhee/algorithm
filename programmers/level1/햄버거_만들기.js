function solution(ingredient) {
  // 빵, 야채, 고기, 빵 순서가 되어야 한다.

  let stack = [];
  let count = 0;

  ingredient.forEach((item) => {
    stack.push(item);

    // length가 4개 이상이면 빵 야채 고기 빵 을 뺄 수 있게 된다.
    if (stack.length >= 4) {
      const 빵야채고기빵 = stack.slice(-4).join("");
      if (빵야채고기빵 === "1231") {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        count++;
      }
    }
  });

  return count;
}
