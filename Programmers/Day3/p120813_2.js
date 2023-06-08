// 짝수는 싫어요 (강의)
function solution(n) {
    var answer = [];
    let cnt = 1;
    while(cnt <= n) {
        if(cnt % 2 === 1) {
            answer.push(cnt);
        }
        cnt += 1;
    }
    return answer;
}

// test1
const input1 = 10;
console.log(solution(input1));

// test2
const input2 = 15;
console.log(solution(input2));