// 중복된 문자 제거
// 스스로 해결하기
function solution(my_string) {
  let removeString = "";

  let divideArray = [...my_string];

  let standardNum = 0;
  let standardIndex = 0;
  for (let i = 0; i < divideArray.length; i++) {
    standardNum = divideArray[i];
    standardIndex = i;
    for (let j = 0; j < divideArray.length; j++) {
      if (standardIndex !== j && standardNum === divideArray[j]) {
        divideArray.splice(j, 1);
      }
    }
  }

  // console.log(divideArray);

  removeString = divideArray.join("");
  return removeString;
}

// test1
const my_string1 = "people";
console.log(solution(my_string1)); // "peol"

// test2
const my_string2 = "We are the world";
console.log(solution(my_string2)); // "We arthwold"

// 정확성 80% : 어떤 case에서 틀리는지 모르곘다!! ㅜㅅㅜ
// 1. 문자열을 배열로 변환하기
// 2. 한 문자를 기준 잡고 기존 인덱스를 제외하고 같은 문자가 있다면 제거
// 3. 다시 문자열로 변환하기
