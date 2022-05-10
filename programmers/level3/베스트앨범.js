function solution(genres, plays) {
  let genreMap = new Map();

  genres
    .map((genre, index) => [genre, plays[index]]) // 장르와 플레이타임을 key, value로 만든다.
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] }; // 초기값 설정
      genreMap.set(genre, {
        total: data.total + play, // 플레이타임을 계속 더해준다.
        // 기존 songs와 합치기위해 spread연산자 사용, 고유번호순 정렬이 필요하므로 index를 같이 넣어준다.
        // songs: ["pop", {play: 1000, index: 1}, {play: 200, index: 3}] ...
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play) // songs는 많이 재생된 노래 순으로 정렬
          .slice(0, 2), // 2개까지 표현
      });
    });

  // Iterator to Array
  return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total) // genre는 총 플레이타임 역순
    .flatMap((x) => x[1].songs) // []로 감쌌으니 depth하나 없애주고 songs만 가져옴(index만 필요하기 때문)
    .map((y) => y.index); // 고유번호(index)만 가져온다.
}
