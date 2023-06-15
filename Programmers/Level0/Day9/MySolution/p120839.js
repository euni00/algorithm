// 가위 바위 보
// 스스로 해결하기
function solution(rsp) {
  var answerNum = "";
  let answerArray = [];

  // 1. 문자열을 배열로 나누기
  const rspArray = [...rsp];

  // 2. 2일때 0, 0일때 5, 5일때 2
  for (let i = 0; i < rspArray.length; i++) {
    if (rspArray[i] === "2") {
      rspArray.splice(i, 1, "0");
    } else if (rspArray[i] === "0") {
      rspArray.splice(i, 1, "5");
    } else if (rspArray[i] === "5") {
      rspArray.splice(i, 1, "2");
    }
  }

  answerNum = rspArray.join("");
  return answerNum;
}

// test1
const rsp1 = "2";
console.log(solution(rsp1)); // "0"

// test2
const rsp2 = "205";
console.log(solution(rsp2)); // "052"

// PASS
// 가위 : 2
// 바위 : 0
// 보 : 5
// 가위(2) > 바위(0) : 2 -> 0
// 바위(0) > 보(5) : 0 -> 5
// 보(5) > 가위(2) : 5 -> 2

// 1. 문자열을 배열로 나누기
// 2. 2일때 0, 0일때 5, 5일때 2
// 2-1. rspArray 배열 길이 만큼
