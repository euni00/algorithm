// 숨어있는 숫자의 덧셈 (1)
// 스스로 풀어보기
function solution(my_string) {
  let sumNumber = 0;
  let divideArray = [...my_string];
  let numArray = [];

  // console.log(divideArray);

  let newArray = [];
  for (let i = 0; i < divideArray.length; i++) {
    if (isNaN(divideArray[i]) == false) {
      newArray.push(divideArray[i]);
    }
  }

  // console.log("newArray : ", newArray);

  for (let i = 0; i < newArray.length; i++) {
    numArray.push(parseInt(newArray[i]));
  }

  // console.log("numArray : ", numArray);

  for (let i = 0; i < numArray.length; i++) {
    sumNumber += numArray[i];
  }

  return sumNumber;
}

// PASS
// test1
const my_string1 = "aAb1B2cC34oOp";
console.log(solution(my_string1)); // 10

// test2
const my_string2 = "1a2b3c4d123";
console.log(solution(my_string2)); // 16

// 숫자가 맞는지 확인하는 함수 -> isNaN() 함수
// 1. 문자열을 배열로 변환하기
// 2. 배열 요소가 숫자라면 새로운 배열에 넣어주기
// 3. 새로운 배열의 문자를 숫자로 반환해주기 (parseInt)
// 4. 문자
