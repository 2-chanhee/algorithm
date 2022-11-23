function solution(emergency) {
  const emergency_ = [...emergency]; // 얕은 복사로 원본 배열은 유지
  const sortEmergency = emergency_.sort((a, b) => b - a);

  return emergency.map((e) => sortEmergency.indexOf(e) + 1);
}
