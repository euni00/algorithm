// 숫자 비교하기
// 스스로 풀어보기
function solution(num1, num2) {
    // 1. num1과 num2가 다르다고 가정하고, answer의 초기값을 -1로 대입합니다.
    var answer = -1;
    // 2. num1과 num2가 같다면 answer에 1을 대입합니다.
    if(num1 === num2) {
        answer = 1;
    }
    return answer;
}