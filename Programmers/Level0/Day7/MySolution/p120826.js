// 특정 문자 제거하기
//  스스로 해결하기
function solution(my_string, letter) {
  let newString = "";
  let newArray = [];

  // 1. 문자열을 문자 배열로 변환하기
  const spreadArray = [...my_string];

  // 2. 특정 문자 제거해서 새로운 배열에 넣어주기
  // 2-2. my_string 배열 길이만큼 반복하기
  for (let i = 0; i < 2; i++) {
    // 2-1. 배열에서 특정 문자 찾기
    if (my_string[i] == letter) {
      newArray = spreadArray.splice(i, 1);
    }
  }

  // 3. 특정 문자를 제외한 새로운 문자열 생성하기
  newString = newArray.join("");
  return newString;
}

/*
// test1
console.log(solution("abcdef", "f"));
*/

// test2
console.log(solution("BCBdbe", "B"));
// CBbe ??
// 문제점 : B가 사라져야하는데 바로 뒷문자 d가 사라졌다. -> index 확인

// 배열 요소 제거 -> splice 함수:)
// 1. 문자열을 문자 배열로 변환하기
// 2. 특정 문자 제거해서 새로운 배열에 넣어주기
// 2-1. 배열에서 특정 문자 찾기
// 2-2. my_string 배열 길이만큼 반복하기
// 3. 특정 문자를 제외한 새로운 문자열 생성하기
