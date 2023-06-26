// 삼각형의 완성조건 (1)
// 스스로 해결하기
function solution(sides) {
  var triangleAble = 0;

  let sumLine = 0;

  // 1. 가장 긴 변을 구하고 제거하기
  let biggestLine = -1;
  let biggestIndex = 0;
  for (let i = 0; i < sides.length; i++) {
    if (biggestLine < sides[i]) {
      biggestLine = sides[i];
      biggestIndex = i;
    }
  }

  // console.log("biggestIndex : ", biggestIndex);

  sides.splice(biggestIndex, 1);

  // console.log("sides : ", sides);

  // 2. 삼각형의 조건이 맞는지 확인하기
  for (let i = 0; i < sides.length; i++) {
    sumLine += sides[i];
  }

  // console.log(sumLine);

  if (biggestLine < sumLine) {
    triangleAble = 1;
  } else {
    triangleAble = 2;
  }

  return triangleAble;
}

// test1
const sides1 = [1, 2, 3];
console.log(solution(sides1)); // 2

// test2
const sides2 = [3, 6, 2];
console.log(solution(sides2)); // 2

// test3
const sides3 = [199, 72, 222];
console.log(solution(sides3)); // 1

// PASS
// 삼각형의 조건
// 1번 선분 + 2번 선분 < 가장 긴 변
// 1. 가장 긴 변을 구하고 제거하기
// 2. 삼각형의 조건이 맞는지 확인하기
