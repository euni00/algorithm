// 배열의 평균값 (강의)
function solution(numbers) {
    var answer = 0;
    let sum = 0;
    /*
    sum = sum + numbers[0];
    sum = sum + numbers[1];
    sum = sum + numbers[2];
    */
    let cnt = 0;
    while(cnt < numbers.length) {
        sum += numbers[cnt];
    }

    return sum / numbers.length;
}

// test1
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(solution(numbers1));

// test2
const numbers2 = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
console.log(solution(numbers2));