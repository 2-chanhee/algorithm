function solution(t, p) {
  let count = 0;
  const numberP = Number(p);

  for (let i = 0; i < t.length - p.length + 1; i++) {
    if (Number(t.slice(i, i + p.length)) <= numberP) count++;
  }

  return count;
}
