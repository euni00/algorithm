// 369 게임
// 스스로 해결하기
function solution(order) {
  let clapNum = 0;

  // 1. 숫자를 문자열로 변환하기
  let numToString = order.toString();

  // 1. 문자열을 배열로 변환하기
  let divideArray = [...numToString];
  console.log(divideArray);

  // 2. 3, 6, 9가 나올때 박수 횟수 늘리기
  for (let i = 0; i < divideArray.length; i++) {
    if (
      divideArray[i] === "3" ||
      divideArray[i] === "6" ||
      divideArray[i] === "9"
    ) {
      clapNum++;
    }
  }

  return clapNum;
}

// test1
const order1 = 3;
console.log(solution(order1));

// test2
const order2 = 29423;
console.log(solution(order2));

// PASS
// 1. 숫자를 문자열로 변환하기
// 2. 문자열을 배열로 변환하기
// 3. 3, 6, 9가 나올때 박수 횟수 늘리기
// 4. 최종 박수 횟수 반환하기
