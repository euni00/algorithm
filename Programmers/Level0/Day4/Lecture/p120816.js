// 피자 나눠 먹기 (3) (강의)
function solution(slice, n) {
    var answer = Math.ceil(n / slice);

    return answer;
}

// test1
console.log(solution(7, 10)); // 2

// test1
console.log(solution(4, 12)); // 3