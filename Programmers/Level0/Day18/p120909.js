// 제곱수 판별하기
// 스스로 해결하기
function solution(n) {
    var calcAnswer = 0;

    let num = 1;
    
    while(true) {
        let numAnswer = num * num;
        // console.log(numAnswer);
    if(numAnswer === n) {
        calcAnswer = 1;
        break;
    } else {
        num++;
    } 

    if(numAnswer > n) {
        calcAnswer = 2;
        break;
    }

    // num++;
    }

    return calcAnswer;
}

// test1
const n1 = 144;
console.log(solution(n1));  // 1

// test2
const n2 = 976;
console.log(solution(n2));  // 2

// PASS
// 1. 1부터 제곱수를 구하기
// 1-1. n과 일치한지 확인하기
// 1-1-1. 일치하면 1을 반환하기
// 1-1-2. 일치하지 않으면 num을 1 키워주기
// 1-2. 제곱수가 n보다 커지면 2를 반환하고 break