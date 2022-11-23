function solution(my_string, num1, num2) {
  const arr = [...my_string];

  const num1_ = arr[num1];
  const num2_ = arr[num2];

  arr.splice(num1, 1, num2_);
  arr.splice(num2, 1, num1_);

  return arr.join("");
}
