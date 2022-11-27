function solution(my_string) {
  const arr = my_string.split(" ");

  let init = Number(arr[0]);

  for (let i = 0; i < arr.length; i = i + 2) {
    if (arr[i + 1] === "+") {
      init += Number(arr[i + 2]);
    } else if (arr[i + 1] === "-") {
      init -= Number(arr[i + 2]);
    }
  }
  return init;
}
