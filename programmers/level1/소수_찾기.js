// 방법 1
function solution(n) {
  let arr = [];

  for (let i = 2; i <= n; i++) {
    arr[i] = i;
  }

  for (let i = 2; i <= n; i++) {
    // 인덱스 2부터 반복문 돌면서 0이면 이미 소수가 아닌거로 판별되어 지워진 것
    if (arr[i] === 0) continue;

    // 인덱스의 배수는 소수가 아니다. 그러므로 0
    // j<=n을 제곱근(j<=Math.sq뭐시기(n))으로 선언해도 되지만 j=i*2로 선언하면 j<=n으로 선언해도 된다.
    for (let j = i * 2; j <= n; j = j + i) {
      arr[j] = 0;
    }
  }

  // 0인 것들은 소수가 아님, 0빼고 return
  return arr.filter((v) => v !== 0).length;
}

// 방법 2
function get_primes(num) {
  const prime = [0, 0, ...Array(num - 1).fill(1)]; // 0과 1은 소수가 아니기에 0으로 선언

  console.log(prime);

  for (let i = 2; i * i <= num; i += 1) {
    // prime[i]라면, 즉 0이 아니라면 (0인건 이미 소수로 판별된 것)
    if (prime[i]) {
      for (let j = i * 2; j <= num; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime.filter(Boolean); // true를 고른다, 즉 1을 고름
}

function solution(n) {
  return get_primes(n).length;
}
