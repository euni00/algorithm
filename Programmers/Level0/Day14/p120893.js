// 대문자와 소문자
// 스스로 해결하기
function solution(my_string) {
  var answer = "";
  let newArray = [];

  // 1. 문자열을 배열을 변환하기
  let divideArray = [...my_string];

  // 2. 소문자인 경우 대문자로, 대문자인 경우 소문자로 변경하여 새로운 배열에 대입
  for (let i = 0; i < divideArray.length; i++) {
    if (divideArray[i] === divideArray[i].toUpperCase()) {
      newArray.push(divideArray[i].toLowerCase());
    } else {
      newArray.push(divideArray[i].toUpperCase());
    }
  }

  // console.log("newArray : ", newArray);

  // 3. 새로운 배열을 문자열로 변환하기
  answer = newArray.join("");
  return answer;
}

// test1
const my_string1 = "cccCCC";
console.log(solution(my_string1));

// test1
const my_string2 = "abCdEfghIJ";
console.log(solution(my_string2));

// PASS
// 1. 문자열을 배열을 변환하기
// 2. 소문자인 경우 대문자로, 대문자인 경우 소문자로 변경하여 새로운 배열에 대입
// 3. 새로운 배열을 문자열로 변환하기
