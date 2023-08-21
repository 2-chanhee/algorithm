function solution(name, yearning, photo) {
  let mapPoint = new Map();

  name.map((item, index) => {
    mapPoint.set(item, yearning[index]);
  });

  const result = [];
  for (const arr of photo) {
    let point = 0;
    for (const name of arr) {
      if (mapPoint.get(name)) {
        point += mapPoint.get(name);
      }
    }
    result.push(point);
  }

  return result;
}
