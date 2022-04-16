function solution(numbers, hand) {
  let answer = "";

  // jsonKey[1].. key가 숫자라 이렇게 접근
  const jsonKey = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  // 번호 사이의 거리를 구하는 함수
  const getDistance = (target, myLocation) => {
    // Math.abs: 절댓값
    return (
      Math.abs(target[0] - myLocation[0]) + Math.abs(target[1] - myLocation[1])
    );
  };

  // 시작 손 위치
  let lLocation = "*";
  let rLocation = "#";

  for (let i = 0; i < numbers.length; i++) {
    if (
      numbers[i] === 1 ||
      numbers[i] === 4 ||
      numbers[i] === 7 ||
      numbers[i] === "*"
    ) {
      answer += "L";
      lLocation = numbers[i];
    } else if (
      numbers[i] === 3 ||
      numbers[i] === 6 ||
      numbers[i] === 9 ||
      numbers[i] === "#"
    ) {
      answer += "R";
      rLocation = numbers[i];
    } else {
      const lDistance = getDistance(jsonKey[numbers[i]], jsonKey[lLocation]);
      const rDistance = getDistance(jsonKey[numbers[i]], jsonKey[rLocation]);

      if (lDistance === rDistance) {
        if (hand === "left") {
          lLocation = numbers[i];
          answer += "L";
        } else {
          rLocation = numbers[i];
          answer += "R";
        }
      } else if (lDistance > rDistance) {
        answer += "R";
        rLocation = numbers[i];
      } else {
        answer += "L";
        lLocation = numbers[i];
      }
    }
  }

  return answer;
}
