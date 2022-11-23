function solution(s) {
  const arr_ = s.split("");
  const set_ = Array.from(new Set(s));
  const result = [];

  set_.filter((set) => {
    const duplicatedLen = arr_.filter((arr) => arr === set).length;
    if (duplicatedLen === 1) result.push(set);

    return result;
  });

  return result.sort().join("");
}
