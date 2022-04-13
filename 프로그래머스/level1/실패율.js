function solution(N, stages) {
  let failPercentageArr = [];

  // 1, 2, 3, 4, 5번 스테이지
  for (let i = 1; i <= N; i++) {
    let notClearUser = 0; // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수
    let inStageUser = 0; // 스테이지에 도달한 플레이어 수
    let failPercentage = 0; // 실패율

    for (let j = 0; j <= stages.length; j++) {
      // 스테이지에 도달한 플레이어 수
      if (i === stages[j]) notClearUser++;
      // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수
      if (i <= stages[j]) inStageUser++;
    }
    // 실패율 계산
    failPercentage = notClearUser / inStageUser;
  }
  // 실패율이 같다면 stage 오름차순, 그렇지 않다면 실패율 내림차순 정렬
  return failPercentageArr
    .sort((a, b) => (a.per === b.per ? a.stage - b.stage : b.per - a.per))
    .map((arr) => arr.stage);
}
