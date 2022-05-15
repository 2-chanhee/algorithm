function solution(n, times) {
  const sortTimes = times.sort((a, b) => a - b); // 이진탐색을 위해 오름차순 정렬
  let left = 1; // 최소 시간
  let right = n * Math.max(...times); // 사람 수 * 최대 걸리는 시간

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // 중간값
    // mid / 심사시간 = 심사관 1명당 처리할 수 있는 입국자 수
    // 심사관마다 처리할 수 있는 입국자 수를 모두 더해준다.
    const sum = sortTimes.reduce(
      (prev, curr) => prev + Math.floor(mid / curr),
      0
    );
    // 처리 가능한 입국자 수 sum이 n보다 작다 -> 시간 부족
    if (sum < n) left = mid + 1;
    //  처리 가능한 입국자 수 sum이 n보다 크다 -> 시간 남음
    else right = mid - 1;
  }

  // while을 빠져나왔다면 left > right 이므로 최소시간
  return left;
}
