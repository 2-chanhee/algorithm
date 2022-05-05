/** reduce 사용 */
function solution(s) {
  const { p, y } = s.split("").reduce(
    (acc, cur) => {
      if (cur.toLowerCase() === "p") acc.p += 1;
      else if (cur.toLowerCase() === "y") acc.y += 1;
      return acc;
    },
    { p: 0, y: 0 }
  );
  return p === y;
}

/** forEach 사용 */
function solution(s) {
  let pCount = 0;
  let yCount = 0;

  s.split("").forEach((each, index) => {
    console.log(each.toLowerCase(), index);
    if (each.toLowerCase() === "p") pCount += 1;
    else if (each.toLowerCase() === "y") yCount += 1;
  });
  return pCount === yCount;
}
