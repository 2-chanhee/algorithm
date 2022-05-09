function solution(priorities, location) {
  // index를 저장하기 위해 map으로 배열 하나 만듦
  const pArr = priorities.map((each, index) => {
    return {
      location: index,
      priority: each,
    };
  });
  // 몇번째로 인쇄되었는지 확인할 변수
  let count = 0;

  while (pArr.length > 0) {
    const shifted = pArr.shift(); // 가장 앞에 있는 문서를 꺼낸다.
    const findBigPriority = pArr.some((p) => p.priority > shifted.priority); // 꺼낸 문서보다 큰 값이 있는지 찾는다.

    // 꺼낸 문서보다 큰 값이 있다면 꺼낸 문서를 배열의 맨 뒤로 보낸다.
    if (findBigPriority) pArr.push(shifted);
    else {
      // 가장 큰 문서라면 출력을 하면서 count를 증가시킨다.
      count++;
      // 출력한 문서가 location과 일치하면 count를 return한다.
      if (shifted.location === location) return count;
    }
  }
}
