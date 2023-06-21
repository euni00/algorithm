// 팩토리얼
// 스스로 해결하기
function solution(n) {
  let maxPac = 0;
  let pac = Math.max();
  let pacNum = 1;

  // 1-2. 팩토리얼 값이 n보다 커질때까지 반복
  while (n < pac) {
    // 1. 팩토리얼 구하기
    // 1-1. 숫자를 하나씩 줄이면서 곱한 값을 누적하기
    for (let j = pacNum; j >= 1; j--) {
      pac *= j;
    }
    pacNum++;
  }
  // 3. 이때 그 전 팩토리얼 i을 리턴해주기
  maxPac = pacNum - 1;
  return maxPac;
}

// test1
const n1 = 3628800;
console.log(solution(n1));

// test2
const n2 = 7;
console.log(solution(n2));

// ERROR
// 1. 팩토리얼 구하기
// 1-1. 숫자를 하나씩 줄이면서 곱한 값을 누적하기
// 1-2. 팩토리얼 값이 n보다 커질때까지 반복
// 3. 이때 그 전 팩토리얼 i을 리턴해주기
