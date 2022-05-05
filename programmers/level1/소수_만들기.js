function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        let count = 0;
        // sum의 제곱근까지만 for문을 돌린다. 시간복잡도 N -> logN 으로 감소
        for (let z = 2; z <= Math.floor(Math.sqrt(sum)); z++) {
          // sum 이 z로 나누어 떨어지면 소수가 아니라는 것, count ++
          if (sum % z === 0) count++;
        }
        // count가 0이면 소수기기 때문에 answer++
        if (count === 0) answer++;
      }
    }
  }
  return answer;
}
