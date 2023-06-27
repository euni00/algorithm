// 인덱스 바꾸기
// 스스로 해결하기
function solution(my_string, num1, num2) {
  let StringAnswer = "";

  // 1. 문자열을 배열로 변환하기
  let divideArray = [...my_string];

  // 2. num1과 num2 인덱스에 있는 문자 바꾸기
  let memory = divideArray[num1];
  divideArray[num1] = divideArray[num2];
  divideArray[num2] = memory;

  // console.log(divideArray);
  StringAnswer = divideArray.join("");

  return StringAnswer;
}

// test1
const my_string1 = "hello";
const num1_1 = 1;
const num2_1 = 2;
console.log(solution(my_string1, num1_1, num2_1)); // "hlelo"

// test1
const my_string2 = "I love you";
const num1_2 = 1;
const num2_2 = 2;
console.log(solution(my_string2, num1_2, num2_2)); // "I l veoyou"

// PASS
// 1. 문자열을 배열로 변환하기
// 2. num1과 num2 인덱스에 있는 문자 바꾸기
// 3. 배열을 다시 문자열로 변환하기
