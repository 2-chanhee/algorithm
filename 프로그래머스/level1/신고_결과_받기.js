function solution(id_list, report, k) {
  let answer = [];
  let reportList = {};

  // { muzi: [ 0, [] ], frodo: [ 0, [] ], apeach: [ 0, [] ], neo: [ 0, [] ] }
  // key: 유저, value: [a, b]: a: 신고당한횟수, b: 신고대상유저
  const userList = id_list.reduce((prev, curr) => {
    prev[curr] = [0, []];
    return prev;
  }, {});

  // 동일한 report는 하나로 간주하므로 new Set으로 중복제거
  for (const id of new Set(report)) {
    // " "로 구분되므로 나눠줌
    const [userId, target] = id.split(" ");
    userList[userId][1].push(target);
    userList[target][0]++;
  }

  // k번 이상 신고당한 유저 리스트
  const targetUserList = id_list.filter((user) => userList[user][0] >= k);

  // user가 신고한 list에 targetUserList의 user가 존재하는지 length를 구해서 return
  return id_list.map(
    (id) => userList[id][1].filter((tId) => targetUserList.includes(tId)).length
  );
}
