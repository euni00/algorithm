// 피자 나눠 먹기 (3)
// 스스로 풀어보기
function solution(slice, n) {
    var answer = 0;

    return Math.ceil(n / slice);
}

// test1
console.log(solution(7, 10)); // 2

// test1
console.log(solution(4, 12)); // 3

// 1. 피자를 먹는 사람의 수를 피자 조각 수로 나눈 몫을 올림하기. -> ceil()