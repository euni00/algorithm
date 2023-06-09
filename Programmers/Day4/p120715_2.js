// 피자 나눠 먹기 (2) (강의)
function solution(n) {
    // var answer = 0;
    let pizzaCount = 0;
    while(true) {
        if(pizzaCount * 6 % n === 0) {
            return pizzaCount;
        }
        pizzaCount += 1;
    }
    // return answer;
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
