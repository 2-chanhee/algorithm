/**
 *  인접 행렬
 *  2차원 배열 생성 -> 연결이 안된 상태로 초기화
 */
const graph = Array.from(Array(5), () => Array(5).fill(false));
// 연결된 것은 true로 설정
// 양방향 이동 가능그래프는 대칭으로 true 선언
graph[0][1] = true;
graph[1][0] = true;

/**
 * 인접 리스트
 * 2차원 배열 생성 -> 연결된 부분만 push
 */
const graph_ = Array.from(Array(5), () => []);
// graph_[0]에 1, 3을 push -> 0은 1, 3과 연결되어 있다고 설정
graph_[0].push(1);
graph_[0].push(3);
