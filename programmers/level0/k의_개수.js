function solution(i, j, k) {
  let str = "";

  for (let l = i; l <= j; l++) {
    str += l;
  }
  return str.split(k).length - 1;
}
