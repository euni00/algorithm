// 피자 나눠 먹기 (1) (강의)
function solution(n) {
    var answer = Math.ceil(n / 7);
    return answer;
}

// test1
const input1 = 7;
console.log(solution(input1));  // 1

// test2
const input2 = 7;
console.log(solution(input2));  // 1

// test3
const input3 = 15;
console.log(solution(input3));  // 3

// 1. 사람 수에 7로 나눈 뒤 그 결과를 올림하기

// 자릿수 버림 함수 -> Math.floor()
// 자릿수 올림 함수 -> Math.ceil()