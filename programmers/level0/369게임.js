function solution(order) {
  return order
    .toString()
    .split("")
    .filter((or) => or === "3" || or === "6" || or === "9").length;
}
