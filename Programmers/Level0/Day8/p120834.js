// 외계행성의 나이
// 스스로 해결하기
function solution(age) {
  var crazyAge = "";
  let alphabetArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "s",
    "y",
    "z",
  ];
  let numberString = "";
  let numberArray = [];
  let ageArray = [];

  // 1. 알파벳이 들어가는 배열을 만든다.
  /* Error
  for (let i = "a"; i < "z"; i++) {
    alphabetArray.push(i);
  }
  */

  /*
  for (let i = 0; i < alphabetArray.length; i++) {
    console.log(alphabetArray[i]);
  }
  */

  // 2. 숫자를 문자열로 변환한다.
  numberString = age.toString();

  // 3. 문자열을 배열로 변환한다.
  numberArray = [...numberString];

  // 4. 숫자 배열을 알파벳 배열로 바꾼다.
  for (let i = 0; i < numberArray.length; i++) {
    let num = numberArray[i]; // 2, 3 ...
    // 4-1. 알파벳 배열을 문자열로 합치기
    ageArray.push(alphabetArray[num]);
  }

  // 5. 알파벳으로 선언한 배열을 문자열로 바꾸기
  crazyAge = ageArray.join("");

  return crazyAge;
}

// test1
const age1 = 23;
console.log(solution(age1)); // "cd"

// test2
const age2 = 51;
console.log(solution(age2)); // "fb"

// test2
const age3 = 100;
console.log(solution(age3)); // "baa"

// PASS
// 1. 알파벳이 들어가는 배열을 만들기
// 2. 숫자를 문자열로 변환하기
// 3. 문자열을 배열로 변환하기
// 4. 숫자 배열을 알파벳 배열로 바꾸기
// 4-1. 알파벳 배열을 문자열로 합치기
// 5. 알파벳으로 선언한 배열을 문자열로 바꾸기
