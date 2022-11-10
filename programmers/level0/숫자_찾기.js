function solution(num, k) {
  const flag = num.toString().indexOf(k);
  return flag >= 0 ? flag + 1 : -1;
}
