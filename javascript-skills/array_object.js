const arr = [1, 2, 3, 4, 5];

// slice - 원본 배열 유지
console.log(arr.slice(1, 3)); // index 1 ~ 3 자름 [2, 3]

// splice 원본 배열 변경
console.log(arr.splice(1, 3)); // index 1부터 3개 자름 [2,3,4]

// push - array 맨 뒤에 추가

// pop array 맨 뒤에서 제거

// unshift - array 맨 앞에 추가

// shift - array 맨 앞에 제거

const obj = { name: "zzzzz", test_: "1234" };

// key - return type -> array
console.log(Object.keys(obj));

// value - return type -> array
console.log(Object.values(obj));
