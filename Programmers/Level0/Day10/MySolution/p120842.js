// 2차원으로 만들기
// 스스로 해결하기
function solution(num_list, n) {
  var newArray = [[]];
  let numArray = [];

  for (let i = 0; i < num_list; i++) {
    // 1. 배열 numArray에 num_list 배열의 n개 만큼 넣기
    for (let j = 0; j < n; j++) {
      numArray.push(num_list[i]);
    }

    num_list.splice(1, n);

    // 2. newArray에 numArray 넣어주기
    newArray.push(numArray);
  }
  return newArray;
}

// test1
const num_list1 = [1, 2, 3, 4, 5, 6, 7, 8];
const n1 = 2;
console.log(solution(num_list1, n1));

// ERROR : [ [] ]
// 1. numArray에 num_list 배열의 n개 만큼 넣기
// 2. numArray에 넣은 숫자는 삭제해주기
// 2. newArray에 numArray 넣어주기
// 3. num_list 배열 길이만큼 반복하기
