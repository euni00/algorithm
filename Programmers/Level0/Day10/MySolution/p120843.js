// 공 던지기
// 스스로 해결하기
function solution(numbers, k) {
  // var answerNum = 0;

  let personNum = 3 * k;

  while (personNum < numbers.length) {
    personNum = personNum - numbers.length;
  }

  return personNum + 1;
}

// test1
const numbers1 = [1, 2, 3, 4];
const k1 = 2;
console.log(solution(numbers1, k1));

// test1
const numbers2 = [1, 2, 3, 4, 5, 6];
const k2 = 2;
console.log(solution(numbers2, k2));

/*
test code
const test = [1, 2, 3, 4];
console.log(test[-1]);
*/

// 1. 공을 던지면서 지나가는 사람 수 구하기
// 2. 지나가는 사람 수에서 배열 길이보다 작아질때까지 감소시키기
