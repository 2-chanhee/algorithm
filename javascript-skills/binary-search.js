/**
 * 이진탐색
 * 반드시 정렬이 되어있어야 사용 가능
 * 시간복잡도: logN
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binarySearch = (array, findValue) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left < right) {
    // 값을 찾았다면 return
    if (arr[mid] === findValue) return mid;

    if (arr[mid] < findValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  // 찾지 못한 경우 return -1
  return -1;
};

console.log(binarySearch(arr, 2));
