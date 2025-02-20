// 주사위의 개수
// 스스로 해결하기
function solution(box, n) {
  var diceNum = 0;

  let dice1 = Math.floor(box[0] / n);
  let dice2 = Math.floor(box[1] / n);
  let dice3 = Math.floor(box[2] / n);

  diceNum = dice1 * dice2 * dice3;
  return diceNum;
}

// test1
const box1 = [1, 1, 1];
const n1 = 1;
console.log(solution(box1, n1));

// test2
const box2 = [10, 8, 6];
const n2 = 3;
console.log(solution(box2, n2));

// PASS
// 1. 상자의 가로, 세로, 높이를 n으로 나누고 그 몫을 곱하기
