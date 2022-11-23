function solution(id_pw, db) {
  // 일치하는 아이디를 찾는다.
  const isValidId = db.filter((db_) => db_[0] === id_pw[0]).flat();

  if (!isValidId.length) return "fail";

  // 아이디가 있고 해당 아이디의 비밀번호가 일치하는지 찾는다.
  const isCorrect = db
    .filter((db_) => db_[0] === id_pw[0] && db_[1] == id_pw[1])
    .flat();

  if (!isCorrect.length) return "wrong pw";

  return "login";
}
