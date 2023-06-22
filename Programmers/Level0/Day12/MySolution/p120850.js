// 문자열 정렬하기 (1)
// 스스로 해결하기
function solution(my_string) {
  var sortedNumber = [];
  let divideString = [...my_string];
  let newArray = [];
  // console.log("divideString : ", divideString);

  for (let i = 0; i < divideString.length; i++) {
    if (isNaN(divideString[i]) == false) {
      newArray.push(divideString[i]);
    }
  }

  // console.log("newArray : ", newArray);

  newArray.sort();

  for (let i = 0; i < newArray.length; i++) {
    sortedNumber.push(parseInt(newArray[i]));
  }

  return sortedNumber;
}

// PASS
// test1
const my_string1 = "hi12392";
console.log(solution(my_string1)); // [1, 2, 2, 3, 9]

// test2
const my_string2 = "p2o4i8gj2";
console.log(solution(my_string2)); // [2, 2, 4, 8]

// test2
const my_string3 = "abcde0";
console.log(solution(my_string3)); // [0]

// 1. 문자열을 배열로 변환하기
// 2. 숫자인 경우 새로운 배열에 넣기
// 3. 새로운 배열 정렬하기
// 4. 배열의 문자를 숫자로 바꿔주기 (Number 타입으로)
