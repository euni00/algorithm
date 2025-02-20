// 특정 문자 제거하기
//  스스로 해결하기
function solution(my_string, letter) {
  let newString = "";
  let indexArray = [];

  // 1. 문자열을 문자 배열로 변환하기
  const spreadArray = [...my_string];

  // 2. 특정 문자 제거해서 새로운 배열에 넣어주기
  // 2-2. my_string 배열 길이만큼 반복하기
  /*
  for (let i = 0; i < my_string.length; i++) {
    // 2-1. 배열에서 특정 문자 찾아서 제거하기
    if (my_string[i] == letter) {
      spreadArray.splice(i, 1);
    }
    console.log("i : ", i);
    console.log("spreadArray : ", spreadArray);
  }
  */

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] == letter) {
      indexArray.push(i);
    }
  }

  console.log("indexArray : ", indexArray); // 0, 1, 2

  let minusIndex = 1;

  for (let i = 0; i < indexArray.length; i++) {
    // indexArray.length == 2
    // let indexNum = indexArray[i];

    spreadArray.splice(indexArray[i], 1); // 0, 2 다음 indexArray[i] - 1이 되어야 한다
    console.log("indexArray : ", indexArray);
    if (i !== indexArray.length - 1) {
      indexArray[i + 1] = indexArray[i + 1] - minusIndex; // indexArray[1]--;
    }

    minusIndex += 1;
    console.log("spreadArray : ", spreadArray);

    // indexArray[i] -= 1;
  }

  // console.log("newArray : ", newArray);

  // 3. 특정 문자를 제외한 새로운 문자열 생성하기
  newString = spreadArray.join("");
  return newString;
}

// PASS
// test1
console.log(solution("abcdef", "f"));

// test2
// BCBdbe
console.log(solution("BCBdbe", "B"));
// CBbe ??
// 문제점 : B가 사라져야하는데 바로 뒷문자 d가 사라졌다. -> index 확인

// test3
// BBBcdfe
console.log(solution("BBBcdfe", "B")); // cdfe

// 배열 요소 제거 -> splice 함수:)
// 1. 문자열을 문자 배열로 변환하기
// 2. 특정 문자 제거해서 새로운 배열에 넣어주기
// 2-1. 배열에서 특정 문자 찾기
// 2-2. my_string 배열 길이만큼 반복하기
// 3. 특정 문자를 제외한 새로운 문자열 생성하기
