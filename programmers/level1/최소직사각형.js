function solution(sizes) {
  let hArr = []; // 가로
  let pArr = []; // 세로

  for (let i = 0; i < sizes.length; i++) {
    sizes[i] = sizes[i].sort((a, b) => a - b);
    hArr.push(sizes[i][0]);
    pArr.push(sizes[i][1]);
  }

  return Math.max(...hArr) * Math.max(...pArr);
}
