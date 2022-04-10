function solution(n, lost, reserve) {
  let count = 0;

  // 정렬
  lost = lost.sort((a, b) => a - b);
  reserve = reserve.sort((a, b) => a - b);

  // reserve, lost에 모두 포함된 경우 reserve에서 lost의 중복 제거
  let rdLost = lost.filter((lost) => !reserve.includes(lost));
  let rdReserve = reserve.filter((reserve) => !lost.includes(reserve));

  for (let i = 0; i < rdLost.length; i++) {
    if (rdReserve.includes(rdLost[i] - 1)) {
      rdReserve = rdReserve.filter((r) => r !== rdLost[i] - 1);
      count++;
    } else if (rdReserve.includes(rdLost[i] + 1)) {
      rdReserve = rdReserve.filter((r) => r !== rdLost[i] + 1);
      count++;
    }
  }
  return n - rdLost.length + count;
}
