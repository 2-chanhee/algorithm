function solution(board, moves) {
  let answer = 0;
  let resultArr = [];

  // 크레인이 내려가는 길이만큼 for문 반복
  for (let i = 0; i < moves.length; i++) {
    // 크레인이 밑으로 내려감 쭈우욱
    for (let j = 0; j < board.length; j++) {
      // 내려가는데 0이 아닌게 존재한다면 (인형이 있다면)
      if (board[j][moves[i] - 1] !== 0) {
        // 결과 배열에 push한다.
        resultArr.push(board[j][moves[i] - 1]);
        // 뽑았으니 0으로 값 변경
        board[j][moves[i] - 1] = 0;
        // resultArr이 2 이상이고 방금 뽑은 인형 === 그 전의 인형이 같다면 둘 다 제거
        if (
          resultArr.length >= 2 &&
          resultArr[resultArr.length - 1] === resultArr[resultArr.length - 2]
        ) {
          resultArr.pop();
          resultArr.pop();
          answer += 2; // 정답 추가
        }
        // 이미 뽑았으니 현재 for문을 빠져나가서 다음 moves로 이동
        break;
      }
    }
  }
  return answer;
}
