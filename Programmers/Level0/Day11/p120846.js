// 합성수 찾기
// 스스로 해결하기
function solution(n) {
  let numberCount = 0;

  for (let i = 3; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        numberCount += 1;
        break;
      }
    }
  }

  return numberCount;
}

// test1
const n1 = 10;
console.log(solution(n1));

// test2
const n2 = 15;
console.log(solution(n2));

// PASS
// 1. 합성수인지 검사하기
// 1-1. 1과 자기 자신을 제외한 나머지 숫자로 나누었을때 나머지가 0인것이 하나라도 있다면 -> 합성수
// 1-2. 없다면 -> 약수
// 1-3. 숫자 n까지 반복하기
