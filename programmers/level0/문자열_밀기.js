function solution(A, B) {
  const aArray = Array.from(A);

  for (let i = 0; i < aArray.length; i++) {
    if (A === B) return i;
    else {
      const pop = aArray.pop();
      aArray.unshift(pop);
      if (aArray.join("") === B) return i + 1;
    }
  }
  return -1;
}
