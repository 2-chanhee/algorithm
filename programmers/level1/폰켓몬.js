function solution(nums) {
  const set = new Set(nums); // 중복을 제거
  const setArr = Array.from(set); // 다시 배열로 만들기

  return setArr.length >= nums.length / 2 ? nums.length / 2 : setArr.length;
}
