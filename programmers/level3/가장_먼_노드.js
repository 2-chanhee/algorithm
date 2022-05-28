function solution(n, edge) {
    // node가 1부터 시작이라 n+1개 생성
    const graph = Array.from(Array(n + 1), () => []);
    
    // 노드간의 연결을 나타내줌
    // ex) 1: [3, 2] -> 1번은 3, 2와 연결... 
    for(const [start, end] of edge) {
        // 양방향 그래프이므로 둘 다 이어준다.
        graph[start].push(end);
        graph[end].push(start);
    }
    
    // distance array, graph 생성과 같이 n+1개 생성, 모두 0으로 초기화
    const dist = Array(n+1).fill(0);
    dist[1] = 1; // 첫 node 길이 1로 초기화

    // BFS - 너비 우선 탐색 구현
    const queue = [1];
    while (queue.length > 0){
        const start = queue.shift(); // 시작지점을 꺼낸다.
        
        // 시작지로부터 도착지를 순회한다.
        // ex) graph[1]의 도착지점은 [3, 2]
        for(const end of graph[start]){ 
            // 도착지의 길이가 0이면 === 한번도 가지 않았다면
            if(dist[end] === 0) {
                queue.push(end); // queue에 추가
                dist[end] = dist[start] + 1
            }
        }
    }
    
    const maxLength = Math.max(...dist);
    
    return dist.filter(d => d === maxLength).length
    
    
    
}