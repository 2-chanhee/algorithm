function solution(price, money, count) {
  const sumUsedMoney = (price, count) => {
    return price * count;
  };

  let usedMoney = 0;
  for (let i = 1; i <= count; i++) {
    usedMoney += sumUsedMoney(price, i);
  }

  return usedMoney > money ? usedMoney - money : 0;
}
