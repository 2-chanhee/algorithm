function solution(n) {
  // 2진법 변환 후 1의 갯수를 return하는 함수
  const find1Length = (num) => {
    return num
      .toString(2)
      .split("")
      .filter((n) => n === "1").length;
  };

  const initNum1Length = find1Length(n);
  let nextNum1Length = 0;

  while (true) {
    // n을 하나씩 증가시키면서 2진법으로 변환 후 1의 개수를 구한다.
    n += 1;
    nextNum1Length = find1Length(n);

    // 조건을 만족하면 return n
    if (initNum1Length === nextNum1Length) return n;
  }
}
