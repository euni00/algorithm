// 2차원으로 만들기
// 스스로 해결하기
function solution(num_list, n) {
  var newArray = [];

  /*
  while (num_list.length !== 0) {
    let numArray = [];

    for (let i = 0; i < n; i++) {
      numArray.push(num_list[i]);
    }

    num_list.splice(0, n);

    // console.log("numArray : ", numArray);

    newArray.push(numArray);

    // console.log("newArray : ", newArray);
  }
  */

  return newArray;
}

// test1
const num_list1 = [1, 2, 3, 4, 5, 6, 7, 8];
const n1 = 2;
console.log(solution(num_list1, n1));

// test2
const num_list2 = [100, 95, 2, 4, 5, 6, 18, 33, 948];
const n2 = 3;
console.log(solution(num_list2, n2));

// PASS
// 1. 배열 num_list에서 배열요소 n개를 새로운 배열에 넣기
// 2. 새로운 배열에 넣은 숫자는 제거하기
// 2. 배열을 다시 newArray에 넣어주기
