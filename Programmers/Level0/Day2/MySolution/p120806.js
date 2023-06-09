// 두 수의 나눗셈
// 스스로 풀어보기
function solution(num1, num2) {
    var answer = Math.floor((num1 / num2) * 1000);
    console.log("Mf(-1.1)", Math.floor(-1.1));
    console.log("parseInt(-1.1)", parseInt(-1.1));
    return answer;
}

// 1. num1을 num2로 나눈다.
// 2. 나눈 값에 1000을 곱한다.
// 3. 그 값에 정수부분을 구한다.