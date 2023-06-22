// 컨트롤 제트
// 스스로 풀어보기
function solution(s) {
  var sumNumber = 0;

  let divideArray = s.split(" ");
  console.log(divideArray);

  let finalArray = [];

  let zIndex = [];

  for (let i = 0; i < divideArray.length; i++) {
    if (isNaN(divideArray[i]) == false) {
      finalArray.push(parseInt(divideArray[i]));
    } else {
      finalArray.push(divideArray[i]);
    }
  }

  console.log("before finalArray : ", finalArray);

  let minusIndex = 0;
  // 4. Z와 Z의 전 숫자를 배열에서 제외하기
  let count = 0; // for문이 잘 돌아가고 있는지
  for (let i = 0; i < finalArray.length; i++) {
    if (finalArray[i - minusIndex] == "Z") {
      finalArray.splice(i - 1 - minusIndex, 2);
      minusIndex += 2;
      console.log(minusIndex);
      console.log("middle finalArray : ", finalArray);
    }
    count++;
  }
  console.log("count : ", count);

  console.log("after finalArray : ", finalArray);

  // 5. 배열에 있는 요소 다 더하기
  for (let i = 0; i < finalArray.length; i++) {
    sumNumber += finalArray[i];
  }

  return sumNumber;
}

// test1
const s1 = "1 2 Z 3";
console.log(solution(s1));

// test2
const s2 = "10 20 30 40";
console.log(solution(s2));

// test3
const s3 = "10 Z 20 Z 1";
console.log(solution(s3));

// test4
const s4 = "10 Z 20 Z";
console.log(solution(s4));

// test5
const s5 = "-1 -2 -3 Z";
console.log(solution(s5));

// 문제점 : for문이 끝까지 돌지 않는다 -> 원인 찾기
// 첫 등장하는 Z에서 for문이 멈추는 것 같다.
// 1. 공백을 기준으로 배열로 변환
// 2. 문자열을 배열로 변환하기
// 3. Z는 문자로 유지하고 숫자 문자는 Number 타입으로 변환하기
// 4. Z와 Z의 전 숫자를 배열에서 제외하기
// 5. 배열에 있는 요소 다 더하기
