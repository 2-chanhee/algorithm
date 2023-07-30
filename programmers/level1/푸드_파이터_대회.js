function solution(food) {
  let result = "";

  food.forEach((foodItem, index) => {
    return (result += String(index).repeat(String(Math.floor(foodItem / 2))));
  });

  return result + "0" + result.split("").reverse().join("");
}
