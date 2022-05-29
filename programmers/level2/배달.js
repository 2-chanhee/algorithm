function solution(N, road, K) {
  // 목적지 배열 생성, 목적지(dist)는 무한대로 초기화 (1번 마을부터 시작이기 때문에 N + 1개 생성)
  const distance = Array.from(Array(N + 1), () => Infinity);
  // 가중치 배열 생성
  const weight = Array.from(Array(N + 1), () => []);

  // 시작 지점을 index, 목적지와 시간을 value로 가지는 배열로 만듦 (양방향)
  for (const [start, dist, time] of road) {
    weight[start].push({ to: dist, time });
    weight[dist].push({ to: start, time });
  }

  // 1번 마을부터 시작, time은 0으로 초기화, 우선순위 큐 array 생성
  const pq = [{ to: 1, time: 0 }];
  // 1번 마을의 distance는 0으로 초기화
  distance[1] = 0;

  while (pq.length) {
    const { to } = pq.pop();

    // 현재 위치에서 갈 수 있는 곳을 탐색한다.
    weight[to].forEach((next) => {
      // 가려고 하는 곳의 가중치 > 현재 가중치 + next.dist까지 가는데 걸리는 시간, 즉 최단거리라는 말임
      if (distance[next.to] > distance[to] + next.time) {
        // 가려고 하는 곳의 가중치를 계산해서 넣어준다.
        distance[next.to] = distance[to] + next.time;
        pq.push(next); // 최단거리이므로 push
      }
    });
  }

  return distance.filter((d) => d <= K).length;
}
