function solution(dots) {
  const xMax = Math.max(...dots.map((dot) => dot[0]));
  const xMin = Math.min(...dots.map((dot) => dot[0]));

  const yMax = Math.max(...dots.map((dot) => dot[1]));
  const yMin = Math.min(...dots.map((dot) => dot[1]));

  return (xMax - xMin) * (yMax - yMin);
}
