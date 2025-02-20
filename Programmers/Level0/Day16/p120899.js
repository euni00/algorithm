// 가장 큰 수 찾기
// 스스로 해결하기
function solution(array) {
    let answerArray = [];
    let maxNumber = -1;
    let maxIndex = 0;
    for(let i = 0; i < array.length; i++) {
        if(maxNumber < array[i]) {
            maxNumber = array[i];
            maxIndex = i;
        }
    }
    
    answerArray.push(maxNumber);
    answerArray.push(maxIndex);

    return answerArray;
}

// test1
const array1 = [1, 8, 3];
console.log(solution(array1)); // [8, 1]

// test2
const array2 = [9, 10, 11, 8];
console.log(solution(array2)); // [11, 2]

// PASS
// 1. array 원소 범위보다 작은 숫자를 기준으로 잡기
// 2. 배열 길이만큼 비교하면서 가장 큰 숫자 찾기 & 인덱스 저장하기