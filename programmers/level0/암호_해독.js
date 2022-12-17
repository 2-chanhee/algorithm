function solution(cipher, code) {
  return cipher
    .split("")
    .filter((each, index) => (index + 1) % code === 0)
    .join("");
}
