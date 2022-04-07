function solution(strings, n) {
  return strings.sort((a, b) => {
    // a[n] === b[n]이면
    if (a[n] === b[n]) {
      // a가 크면 오름차순
      if (a > b) return 1;
      // b가 크면 그 반대
      else return -1;
    }
    // a가 크면 오름차순
    else if (a[n] > b[n]) {
      return 1;
    }
    // b가 크면 그 반대로
    else return -1;
  });
}
