function solution(lottos, win_nums) {
  const answer = [];
  let count = 0;

  // 0의 개수
  const sumOfZero = lottos.filter((z) => z === 0).length;
  // 0을 뺀 배열
  const notZero = lottos.filter((z) => z !== 0);

  // 0을 제외한 lotts_와 winNums_를 비교, 결과와 일치하는 개수를 구함
  for (let i = 0; i < notZero.length; i++) {
    for (let j = 0; j < win_nums.length; j++) {
      if (notZero[i] === win_nums[j]) count++;
    }
  }

  let topRank = count === 0 && sumOfZero === 0 ? 6 : 7 - (sumOfZero + count);
  let rowRank = count === 0 ? 6 : 7 - count;

  return [topRank, rowRank];
}
