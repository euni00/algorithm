// 최대값 만들기 (1)
// 스스로 해결하기
function solution(numbers) {
  let maxNumber = 0;
  let count = 0;
  let sortedArray = [];

  // 1. 배열 numbers에서 첫번째로 큰 수, 두번쨰로 큰 수 구하기
  // 1-1. 배열 numbers를 정렬하기
  // 1-2. 배열 numbers에서 가장 작은 숫자 찾기
  // 1-5. numbers 배열 길이만큼 반복하기
  while (count < numbers.length) {
    let minNumber = 10001;
    let minIndex = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < minNumber) {
        minNumber = numbers[i];
        minIndex = i;
      }
    }

    // 1-3. 새 배열에 가장 작은 숫자 넣기
    sortedArray.push(minNumber);

    // 1-4. 찾은 숫자는 numbers 원소의 최대값보다 큰 값으로 바꾸기
    numbers[minIndex] = 10001;

    count++;
  }

  // 2. 배열길이 - 1, 배열길이 -2 인덱스의 값을 가져오기
  maxNumber = sortedArray[numbers.length - 1] * sortedArray[numbers.length - 2];

  return maxNumber;
}

// test1
const numbers1 = [1, 2, 3, 4, 5];
console.log(solution(numbers1)); // 20

// test2
const numbers2 = [0, 31, 24, 10, 1, 9];
console.log(solution(numbers2)); // 744

// PASS
// 1. 배열 numbers에서 첫번째로 큰 수, 두번쨰로 큰 수 구하기
// 1-1. 배열 numbers를 정렬하기
// 1-2. 배열 numbers에서 가장 작은 숫자 찾기
// 1-3. 새 배열에 가장 작은 숫자 넣기
// 1-4. 찾은 숫자는 numbers 원소의 최대값보다 큰 값으로 바꾸기
// 1-5. numbers 배열 길이만큼 반복하기
// 2. 배열길이 - 1, 배열길이 -2 인덱스의 값을 가져와서 곱하기
