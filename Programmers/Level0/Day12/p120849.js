// 모음 제거
// 스스로 해결하기
function solution(my_string) {
  var newString = "";
  // const vowel = ["a", "i", "o", "u", "e"];
  let removeArray = [];
  // 1. 문자열을 배열로 변환하기
  let newArray = [...my_string];
  console.log("before newArray : ", newArray);

  // 2. a, i, o, u, e를 제외한 문자를 새로운 배열에 넣어주기
  for (let i = 0; i < my_string.length; i++) {
    if (
      newArray[i] !== "a" &&
      newArray[i] !== "i" &&
      newArray[i] !== "o" &&
      newArray[i] !== "u" &&
      newArray[i] !== "e"
    ) {
      removeArray.push(newArray[i]);
    }
    console.log("i : ", i);
  }
  console.log("after removeArray : ", removeArray);

  newString = removeArray.join("");
  return newString;
}

// PASS
// tip! 원본 건들지 말기!!
// test1
const my_string1 = "bus";
console.log(solution(my_string1));

// test2
const my_string2 = "nice to meet you";
console.log(solution(my_string2));

// 모음 -> a, i, o, u, e
// 1. 문자열을 배열로 변환하기
// 2. a, i, o, u, e를 만나면 제거하기
// 3. 배열을 다시 합쳐서 반환
