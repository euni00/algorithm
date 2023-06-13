// 문자 반복 출력하기
// 스스로 해결하기
function solution(my_string, n) {
  var answer = "";
  let newArray = [];

  // 1. 문자열을 문자 배열로 변환하기
  const spreadArray = [...my_string];

  // 2. n만큼 반복한 문자열 출력하기
  // 2-2. 문자열 길이만큼 반복하기
  for (let i = 0; i < my_string.length; i++) {
    // 2-1. n만큼 문자를 반복한 후 새로운 문자 배열에 넣기
    for (let j = 0; j < n; j++) {
      newArray.push(spreadArray[i]);
    }
  }

  // 2-2. 문자열 길이만큼 반복하기
  answer = newArray.join("");
  return answer;
}

// test1
const my_string1 = "hello";
console.log(solution("hello", 3));

// 1. 입력 받은 문자열을 문자 배열로 변환하기
// 2. n만큼 반복한 문자열 출력하기
// 2-1. n만큼 문자를 반복한 후 새로운 문자 배열에 넣기
// 2-2. 문자열 길이만큼 반복하기
// 3. 새로운 문자 배열을 문자열로 변환하기
