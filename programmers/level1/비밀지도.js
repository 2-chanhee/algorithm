function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    let code = "";
    const arr1_ = arr1[i].toString(2).padStart(n, 0);
    const arr2_ = arr2[i].toString(2).padStart(n, 0);

    for (let j = 0; j < arr1_.length; j++) {
      if (arr1_[j] === "1" || arr2_[j] === "1") code += "#";
      else code += " ";
    }
    answer.push(code);
  }
  return answer;
}
