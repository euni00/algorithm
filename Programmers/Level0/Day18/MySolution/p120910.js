// 세균 증식
// 스스로 해결하기
function solution(n, t) {
    var bugNumber = n;
    for(let i = 0; i < t; i++) {
        bugNumber *= 2;
    }
    
    return bugNumber;
}

// test1
const n1 = 2;
const t1 = 10;
console.log(solution(n1, t1));  // 2048

// test2
const n2 = 7;
const t2 = 15;
console.log(solution(n2, t2));  // 229,376

// PASS
// 1. n을 시작으로 t번 만큼 2를 곱하기