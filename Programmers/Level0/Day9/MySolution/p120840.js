// 구슬을 나누는 경우의 수
// 스스로 해결하기
function solution(balls, share) {
  var ballCount = 0;

  let num1 = 1; // 분자
  let num2 = 1; // 분모

  // 분자
  for (let i = balls; i >= share; i--) {
    num1 *= i;
  }

  console.log(num1);

  // 분모
  for (let i = share; i >= 1; i--) {
    num2 *= i;
  }

  console.log(num2);

  ballCount = num1 / num2;

  return ballCount;
}

// test1 ) balls : 3, share : 2 -> 3C2 = 3 * 2  / 2 * 1
const balls1 = 3;
const share1 = 2;
console.log(solution(balls1, share1)); // 3

// test2 ) balls : 5, share : 3 -> 5C3 = 5 * 4 * 3 / 3 * 2 * 1
const balls2 = 5;
const share2 = 3;
console.log(solution(balls2, share2)); // 10

// ERROR
// 1. 수식을 이용해 답을 구하기
