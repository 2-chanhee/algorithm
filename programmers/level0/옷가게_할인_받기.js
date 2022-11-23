function solution(price) {
  if (price >= 100000 && price < 300000) {
    return parseInt(price * 0.95);
  } else if (price >= 300000 && price < 500000) {
    return parseInt(price * 0.9);
  } else if (price >= 500000) {
    return parseInt(price * 0.8);
  } else return price;
}
