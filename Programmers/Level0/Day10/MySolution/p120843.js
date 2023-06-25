// 공 던지기
// 스스로 해결하기
function solution(numbers, k) {
  let personNum = 1;

  for (let i = 0; i < k - 1; i++) {
    personNum += 2;
    if (personNum > numbers.length) {
      personNum -= numbers.length;
    }
  }

  return personNum;
}

// test1
const numbers1 = [1, 2, 3, 4];
const k1 = 2;
console.log(solution(numbers1, k1));

// test1
const numbers2 = [1, 2, 3, 4, 5, 6];
const k2 = 5;
console.log(solution(numbers2, k2));

// test3
const numbers3 = [1, 2, 3];
const k3 = 3;
console.log(solution(numbers3, k3));

/*
// test code
const test = [1, 2, 3, 4];
console.log(test[7]);
*/

// PASS
// 문제 이해 ㅜㅜ
// 1. k - 1 만큼 2 더하기
// 1-1. 누적합계가 배열 길이보다 길어지면 배열 길이 빼기
// 2. k번째로 공을 던지는 사람의 번호 구하기
