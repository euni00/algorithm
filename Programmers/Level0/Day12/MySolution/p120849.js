// 모음 제거
// 스스로 해결하기
function solution(my_string) {
  var newString = "";
  const vowel = ["a", "i", "o", "u", "e"];
  let minusIndex = 0;
  // 1. 문자열을 배열로 변환하기
  let newArray = [...my_string];
  console.log("newArray : ", newArray);

  // 2. a, i, o, u, e를 만나면 제거하기
  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (newArray[i] == vowel[j]) {
        newArray.splice(i - minusIndex, 1);
        minusIndex += 1;
        console.log("minusIndex : ", minusIndex);
      }
    }
  }
  console.log("newArray : ", newArray);

  newString = newArray.join("");
  return newString;
}

// ERROR
/*
// test1
const my_string1 = "bus";
console.log(solution(my_string1));
*/

// test2
const my_string2 = "nice to meet you";
console.log(solution(my_string2));
// 모음 -> a, i, o, u, e
// 1. 문자열을 배열로 변환하기
// 2. a, i, o, u, e를 만나면 제거하기
// 3. 배열을 다시 합쳐서 반환
