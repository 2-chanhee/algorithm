function solution(players, callings) {
  let playersMap = new Map();

  // array to map
  players.forEach((item, index) => {
    playersMap.set(item, index);
  });

  for (const winnerName of callings) {
    // 추월당한 선수의 name
    const loseName = players[playersMap.get(winnerName) - 1];

    // 추월당한 선수를 tmp에 담아준다.
    const tmp = players[playersMap.get(winnerName) - 1];
    // 위치 변경
    players[playersMap.get(winnerName) - 1] = winnerName;
    // 위치 변경
    players[playersMap.get(winnerName)] = tmp;

    // 추월한 선수의 index를 하나 뺀다.
    playersMap.set(winnerName, playersMap.get(winnerName) - 1);
    // 추월당한 선수의 index를 하나 더한다.
    playersMap.set(loseName, playersMap.get(loseName) + 1);
  }

  return players;
}
