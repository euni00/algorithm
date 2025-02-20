function solution(numbers, num1, num2) {
  var newArray = [];

  // 1. 배열 numbers 인덱스로 접근해서 배열의 원소를 새 배열에 넣는다.
  for (let j = num1; j <= num2; j++) {
    newArray.push(numbers[j]);
  }

  return newArray;
}

// test1
console.log(solution([1, 2, 3, 4, 5], 1, 3));

// test2
console.log(solution([1, 3, 5], 1, 2));

// PASS
// 1. 배열 numbers 인덱스로 접근해서 배열의 원소를 새 배열에 넣는다.
