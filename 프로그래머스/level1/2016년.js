function solution(a, b) {
  let dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // getDay: 0: 일요일 ~ 6: 토요일
  return dayArr[new Date(`2016-${a}-${b}`).getDay()];
}
