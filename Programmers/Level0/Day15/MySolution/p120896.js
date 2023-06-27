// 한 번만 등장한 문자
// 스스로 해결하기
function solution(s) {
  var sortedAlpha = [];

  // 1. 자기자신 뺴고 겹치는 문자가 몇개인지 확인하기
  // 1-3. 문자열 s 길이만큼 반복하기
  for (let i = 0; i < s.length; i++) {
    let bothCount = 0;
    let bothIndex = i;
    for (let j = 0; j < s.length; j++) {
      if (i != j) {
        if (s[i] == s[j]) {
          bothCount++;
        }
      }
    }

    // 1-1. 겹치는 문자가 0개이면 새로운 배열에서 넣기
    // 1-2. 겹치는 문자가 1개 이상이면 아무것도 하지 않기
    if (bothCount == 0) {
      sortedAlpha.push(s[bothIndex]);
    }
  }

  console.log("sortedAlpha : ", sortedAlpha);

  // 2. 새로운 문자열 사전 순으로 정렬하기 (sort)
  sortedAlpha.sort();

  sortedAlpha = sortedAlpha.join("");

  return sortedAlpha;
}

// test1
const s1 = "abcabcadc";
console.log(solution(s1)); // "d"

// test2
const s2 = "abdc";
console.log(solution(s2)); // "d"

// test1
const s3 = "hello";
console.log(solution(s3)); // "d"

// 1. 자기자신 뺴고 겹치는 문자가 몇개인지 확인하기
// 1-1. 겹치는 문자가 0개이면 새로운 배열에서 넣기
// 1-2. 겹치는 문자가 1개 이상이면 아무것도 하지 않기
// 1-3. 문자열 s 길이만큼 반복하기
// 2. 새로운 문자열 사전 순으로 정렬하기 (sort)
