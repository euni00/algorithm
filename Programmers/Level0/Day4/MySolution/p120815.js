// 피자 나눠 먹기 (2)
// 스스로 풀어보기
function solution(n) {
    // var answer = 0;
    
    // 1 <= n <= 100
    // if. n = 100 , 300 / 100 === 3, 1 <= i <= 50
    for(let i = 1; i <= 50; i++) {
            if(6 * i % n === 0) {
                // console.log("6 * i % n = ", 6 * i % n);
                return i;
            }
        }
    
}

// test1
const input1 = 6
console.log(solution(input1));  // 1

// test2
const input2 = 10;
console.log(solution(input2));  // 5

// test3
const input3 = 4;
console.log(solution(input3));  // 2

// 6의 배수 : 6, 12, 18, 24, 30 ...
// test1 : 6 / 6(n)
// test2 : 6 / 10 ... 30 / 10(n)
// test3 : 6 / 4 , 12 / 4 

// 1. 6의 배수를 사람의 수(n)로 나누기
// 1-1. 나머지가 0일 경우에 그 몫을 반환합니다.