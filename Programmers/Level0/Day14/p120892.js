// 암호 해독
// 스스로 해결하기
function solution(cipher, code) {
  var stringAnswer = "";
  let numArray = [];

  // 1. 문자열을 배열로 변환하기
  let divideArray = [...cipher];

  // 2. code의 배수 번째 글자만 새로운 배열에 넣기
  for (let i = 1; code * i - 1 < divideArray.length; i++) {
    numArray.push(divideArray[code * i - 1]);
  }

  // console.log("numArray : ", numArray);

  stringAnswer = numArray.join("");

  return stringAnswer;
}

// test1
const cipher1 = "dfjardstddetckdaccccdegk";
const code1 = 4;
console.log(solution(cipher1, code1));

// test2
const cipher2 = "pfqallllabwaoclk";
const code2 = 2;
console.log(solution(cipher2, code2));

// PASS
// 1. 문자열을 배열로 변환하기
// 2. code의 배수 번째 글자만 새로운 배열에 넣기
// 3. 새로운 배열을 문자열로 바꿔주기
