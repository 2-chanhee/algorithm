function solution(phone_number) {
  let result = "";

  for (let i = 0; i < phone_number.length - 4; i++) {
    result += "*";
  }

  return (result += phone_number.slice(phone_number.length - 4, phone_number));
}
