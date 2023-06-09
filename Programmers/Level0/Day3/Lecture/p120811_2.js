// 중앙값 구하기
// 더 쉽게 구해보기!

function solution(array) {
    return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

// test1
const input1 = [1, 2, 7, 10, 11];
console.log(solution(input1));  

// test2
const input2 = [9, -1, 0];
console.log(solution(input2));  

// 오름차순 정렬
// array.sort((a, b) => a - b)

// 내림차순 정렬
// array.sort((a, b) => b - a)

