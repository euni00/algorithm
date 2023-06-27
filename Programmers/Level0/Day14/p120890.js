// 가까운 수
// 스스로 해결하기
function solution(array, n) {
  var closeNum = 0;
  let minusNum = [];

  // 1. 각 배열 요소와 n과의 차이를 새로운 배열에 넣기 (- 경우 -> 절대값)
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i] - n);
    minusNum.push(Math.abs(array[i] - n));
  }

  // console.log("minusNum : ", minusNum);

  // 2. 새로운 배열에서 가장 작은 숫자의 인덱스 구하기
  let minNum = 101;
  let minIndex = 0;
  for (let i = 0; i < minusNum.length; i++) {
    if (minusNum[i] < minNum) {
      minNum = minusNum[i];
      minIndex = i;
    }
  }

  // 3. 최종적으로 가장 가까운 수 구하기
  closeNum = array[minIndex];

  return closeNum;
}

// test1
const array1 = [3, 10, 28];
const n1 = 20;
console.log(solution(array1, n1));

// test1
const array2 = [10, 11, 12];
const n2 = 13;
console.log(solution(array2, n2));

// 정확성 88.9 ㅜㅅㅜ
// 숫자의 절대값 구하기 -> Math.abs() 함수
// 1. 각 배열 요소와 n과의 차이를 새로운 배열에 넣기 (- 경우 -> 절대값)
// 2. 새로운 배열에서 가장 작은 숫자의 인덱스 구하기
// 3. 최종적으로 가장 가까운 수 구하기
