function solution(common) {
  const ot = common[1] - common[0];
  const tt = common[2] - common[1];

  // gp: 등차수열, gs: 등비수열
  const flag = ot === tt ? "gp" : "gs";

  return flag === "gp"
    ? common[common.length - 1] + (common[1] - common[0])
    : common[common.length - 1] * (common[1] / common[0]);
}
