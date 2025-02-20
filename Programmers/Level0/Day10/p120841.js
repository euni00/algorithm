// 점의 위치 구하기
// 스스로 해결하기
function solution(dot) {
  var location = 0;
  if (dot[0] > 0 && dot[1] > 0) {
    location = 1;
  } else if (dot[0] < 0 && dot[1] > 0) {
    location = 2;
  } else if (dot[0] < 0 && dot[1] < 0) {
    location = 3;
  } else if (dot[0] > 0 && dot[1] < 0) {
    location = 4;
  }
  return location;
}

// test1
const dot1 = [2, 4];
console.log(solution(dot1));

// tes2
const dot2 = [-7, 9];
console.log(solution(dot2));

// PASS
// x > 0, y > 0 -> 제 1사분면
// x < 0, y > 0 -> 제 2사분면
// x < 0, y < 0 -> 제 3사분면
// x > 0, y < 0 -> 제 4사분면
