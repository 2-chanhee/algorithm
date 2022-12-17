function solution(num_list) {
  const _ = num_list.filter((num) => num % 2 === 0).length;

  return [_, num_list.length - _];
}
