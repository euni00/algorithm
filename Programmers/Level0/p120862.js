function solution(numbers) {
    let multiArray = [];
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j = i+1; j < numbers.length; j++ ) {
            multiArray.push(numbers[i] * numbers[j]);
        }
    }

    let answer = Math.max(...multiArray);

    return answer;
}