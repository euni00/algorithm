// 숨어있는 숫자의 덧셈 (1)
function solution(my_string) {
  let sumNumber = 0;
  let divideArray = [...my_string];
  let newArray = [];
  for (let i = 0; i < divideArray.length; i++) {
    if (divideArray[i].isNaN) {
      newArray.push(divideArray[i]);
    }
  }

  console.log(newArray);

  for (let i = 0; i < newArray.length; i++) {
    sumNumber += newArray[i];
  }

  return sumNumber;
}

// test1
const my_string1 = "aAb1B2cC34oOp";
console.log(solution(my_string1)); // 10

// test2
const my_string2 = "1a2b3c4d123";
console.log(solution(my_string2)); // 16
// 숫자가 맞는지 확인하는 함수 -> isNaN() 함수
