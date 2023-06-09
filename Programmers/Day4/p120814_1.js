// 피자 나눠 먹기 (1)
// 스스로 풀어보기
function solution(n) {
    var answer = 0;

    // 1. 피자를 나눠먹을 사람의 수 (n)에서 7을 나누기
    const pizzaDiv = Math.floor(n / 7);

    // 1-1. 그 몫을 필요한 피자의 수에 넣기
    answer = pizzaDiv;

    // 1-2. if. 나머지가 0이 아닐 경우, 필요한 피자의 수를 1 더하기
    if(n % 7 !== 0) {
        answer += 1;
    }
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

// 1. 피자를 나눠먹을 사람의 수 (n)에서 7을 나누기
// 1-1. 그 몫을 필요한 피자의 수에 넣기
// 1-2. if. 나머지가 0이 아닐 경우, 필요한 피자의 수를 1 더하기