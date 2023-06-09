// 배열의 평균값
// 스스로 풀어보기
function solution(numbers) {
    var answer = 0;

    // 1. numbers 배열의 평균값을 구한다.
    for(let count = 0; count < numbers.length; count++) {
        answer += numbers[count];
    }
    answer /= numbers.length;

    // 1-1. if. 평균값 소수 부분이 .0 또는 .5인 경우에만 출력하기
    if(answer - Math.floor(answer) === 0.0 | answer - Math.floor(answer) === 0.5) {
        return answer;
    }
   
}

// test1
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(solution(numbers1));

// test2
const numbers2 = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
console.log(solution(numbers2));

// 1. numbers 배열의 평균값을 구하기
// 1-1. if. 평균값 소수 부분이 .0 또는 .5인 경우에만 출력하기