function solution(people, limit) {
  let answer = 0;
  const sortPeople = people.sort((a, b) => a - b);

  // index
  let start = 0;
  let end = sortPeople.length - 1;

  while (start < end) {
    // min + max <= limit, 둘 다 탈수 있는 경우
    if (sortPeople[start] + sortPeople[end] <= limit) {
      start += 1; // 시작 위치 증가 (위 조건이 안될때까지 반복)
    }

    // 위 조건을 만족하지 못하면 무거운 사람만 타는게 효율적
    end -= 1;

    // 정답 추가
    answer += 1;
  }

  return start === end ? answer + 1 : answer;
}
