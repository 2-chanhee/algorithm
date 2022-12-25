const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.reduce((acc, curr) => acc + curr);

console.log(result);

const f = [
  {
    a: 1,
    b: 1,
  },
  {
    a: 2,
    b: 2,
  },
  {
    a: 3,
    b: 1,
  },
  {
    a: 3,
    b: 4,
  },
];

const fResult = f.reduce((acc, curr) => acc + curr.b, 0);

console.log(fResult);

const key = [
  { k: 1, v: 11 },
  { k: 2, v: 12 },
  { k: 3, v: 13 },
  { k: 1, v: 100 },
  { k: 2, v: 88 },
];

//TODO
// {'1': [{ k: 1, v: 11 }, { k: 1, v: 100 }], '2': [{ k: 2, v: 12 }, { k: 2, v: 88 }], '3': [{ k: 3, v: 13 }]}

const keyResult = key.reduce((acc, curr) => {
  const key = curr.k; // 현재 key

  if (!acc[key]) acc[key] = []; // 누적값에 key가 없다면 빈 배열
  acc[key].push(curr); // 있다면 push
  return acc; // 누적값 추가
}, {});

console.log("result", keyResult);

const code = ["a", "b", "c", "a", "b", "c", "a", "b", "s", "q"];

const nameResult = code.reduce((acc, curr) => {
  if (curr in acc) {
    console.log("curr", curr);
    console.log("acc", acc);
    acc[curr]++;
  } else acc[curr] = 1;
  return acc;
}, {});

console.log(nameResult);
//  { a: 3, b: 3, c: 2, s: 1, q: 1 }
