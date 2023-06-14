// 순서쌍의 개수
// 스스로 해결하기
function solution(n) {
  var pairNumber = 0;

  // 1. n을 1부터 나누기
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      pairNumber++;
    }
  }
  return pairNumber;
}

// test1
const n1 = 20;
console.log(solution(n1)); // 6

// test2
const n2 = 100;
console.log(solution(n2)); // 9

// PASS
// 1. n을 1부터 n까지 나누기
// 1-1. n을 어떤 숫자로 나누었을때 0이 되면 순서쌍의 개수를 1 더하기
