// 약수 구하기
// 스스로 해결하기
function solution(n) {
  var answer = [];
  let num = 1;
  let share = 0;

  while (true) {
    share = n / num;

    if (Number.isInteger(share)) {
      answer.push(num);
      answer.push(share);
    }

    if (num > share) {
      break;
    }

    num++;
  }

  // console.log(answer);
  answer.sort(function (a, b) {
    return a - b;
  });
  // console.log(answer);

  return answer;
}

// test1
const n1 = 24;
console.log(solution(n1));

// test2
const n2 = 29;
console.log(solution(n2));

// 정확성 83.3 ㅜㅅㅜ
// 1. 1부터 나눠주기
// 1-1. 몫이 정수일때, 나누는 수와 몫을 새로운 배열에 넣기
// 1-1. 나누려고 하는 숫자가 마지막 계산한 몫보다 커질때 break
// 2. 새로운 배열 오름차순으로 정렬하고 반환하기
