function solution(d, budget) {
  d.sort((a, b) => a - b);

  let count = 0;
  let sumMoney = 0;

  for (let i = 0; i < d.length; i++) {
    count++;
    sumMoney = sumMoney + d[i];

    if (sumMoney > budget) return count - 1;
  }
  return count;
}
