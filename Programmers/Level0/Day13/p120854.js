// 배열 원소의 길이
// 스스로 해결하기
function solution(strlist) {
  var lengthArray = [];
  for (let i = 0; i < strlist.length; i++) {
    lengthArray.push(strlist[i].length);
  }
  return lengthArray;
}

// test1
const strlist1 = ["We", "are", "the", "world!"];
console.log(solution(strlist1)); // [2, 3, 3, 6]

// test2
const strlist2 = ["I", "Love", "Programmers."];
console.log(solution(strlist2)); // [1, 4, 12]

// PASS
// 1. 문자열의 길이 구하기
// 2. 배열 strlist 길이만큼 반복하기
