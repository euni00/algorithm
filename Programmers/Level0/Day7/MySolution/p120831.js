// 짝수의 합
// 스스로 해결하기
function solution(n) {
  var totalNum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      totalNum += i;
    }
  }
  return totalNum;
}

// test1
const n1 = 10;
console.log(solution(n1)); // 30

// test2
const n2 = 4;
console.log(solution(n2)); // 6

// PASS
