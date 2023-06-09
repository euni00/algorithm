// 짝수는 싫어요
// 스스로 풀어보기
function solution(n) {
    var answer = [];
    for(let num = 0; 2 * num + 1 <= n; num++) {
        answer.push(2 * num + 1);
        // console.log(answer);
    }

    // console.log("answer : ", answer);
    return answer;
}

// test1
const input1 = 10;
console.log(solution(input1));

// test2
const input2 = 15;
console.log(solution(input2));