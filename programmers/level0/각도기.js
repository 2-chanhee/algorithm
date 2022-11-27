function solution(angle) {
  switch (true) {
    case angle < 90:
      return 1;
    case angle === 90:
      return 2;
    case 90 <= angle && angle < 180:
      return 3;
    case angle === 180:
      return 4;
  }
}
