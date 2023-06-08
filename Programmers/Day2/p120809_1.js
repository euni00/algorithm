function solution(numbers) {
    var answer = [];
    
    // 1. numbers 배열의 각 원소를 X2로 계산합니다.
    for(let i = 0; i < numbers.length; i++) {
        // 2. answer 배열에 추가합니다.
        answer[i] = numbers[i] * 2;
    }
    
    return answer;
}

const input = [1, 2, 3, 4, 5];
console.log(solution(input));