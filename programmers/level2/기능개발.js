function solution(progresses, speeds) {
  const result = [];

  while (progresses.length) {
    let count = 0;

    // 매일매일 진행도에 속도를 더해준다.
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    // 완료된 작업이 있다면 shift
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count += 1;
    }

    if (count > 0) result.push(count);
  }

  return result;
}
