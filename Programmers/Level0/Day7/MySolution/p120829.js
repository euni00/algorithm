// 각도기
// 스스로 해결하기
function solution(angle) {
  let angleState = 0;

  /* 
  if (0 < angle < 90) {
    angleState = 1;
  } else if (angle === 90) {
    angleState = 2;
  } else if (90 < angle < 180) {
    angleState = 3;
    return angleState;
  } else if (angle === 180) {
    angleState = 4;
  }
  */

  if (angle > 0 && angle < 90) {
    angleState = 1;
  } else if (angle === 90) {
    angleState = 2;
  } else if (angle > 90 && angle < 180) {
    angleState = 3;
  } else if (angle === 180) {
    angleState = 4;
  }

  // console.log("angleState : ", angleState);
  return angleState;
}

// PASS
// test1
const angle1 = 70;
console.log(solution(angle1));

// test2
const angle2 = 91;
console.log(solution(angle2));

// test3
const angle3 = 180;
console.log(solution(angle3));

// 기억 되살리기(?)
// 예각 -> 90도 미만
// 직각 -> 90도 일때
// 둔각 -> 90도 초과 180도 미만
// 평각 -> 180도 일때
