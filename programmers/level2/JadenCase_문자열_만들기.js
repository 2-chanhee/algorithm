function solution(s) {
  // 전부 소문자로 변경, string to array
  const s_ = s.toLowerCase().split(" ");

  return s_
    .map((s) => {
      // string to array
      let sArr = s.split("");
      // 빈 문자열에 toUpperCase()를 사용하면 아무것도 반환하지 않기 때문에 런타임 에러가 발생한다.
      // 그러므로 sArr[0]이 존재하는 경우에만 대문자로 변경한다.
      if (sArr[0]) sArr[0] = sArr[0].toUpperCase();
      // array to string
      return sArr.join("");
    })
    .join(" "); // array to string
}
