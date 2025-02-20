// 팩토리얼
// 스스로 해결하기
function solution(n) {
  // let maxPac = 0;
  // let pac = 1;
  let pacNum = 1;
  while (true) {
    let pac = 1;
    for (let i = pacNum; i >= 1; i--) {
      pac *= i;
    }

    // pac *= pacNum;

    if (pac <= n) {
      pacNum++;
    } else {
      break;
    }
  }

  // console.log("pacNum : ", pacNum);

  return pacNum - 1;
}

// test1
const n1 = 3628800;
console.log(solution(n1));

// test2
const n2 = 7;
console.log(solution(n2));

// PASS
// 1. 팩토리얼 구하기
// 1-1. 숫자를 하나씩 줄이면서 곱한 값을 누적하기
// 1-2. 팩토리얼 값이 n보다 크지 않을때까지 반복하기
// 3. 팩토리얼 숫자 리턴하기
