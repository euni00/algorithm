// 자릿수 더하기
// 스스로 해결하기
function solution(n) {
    var sumAnswer = 0;
    let nString = n.toString();
    let nArray = [...nString];
    for(let i = 0; i < nArray.length; i++) {
        nArray[i] = Number.parseInt(nArray[i]);
    }
    console.log(nArray);
    
    for(let i = 0; i < nArray.length; i++) {
        sumAnswer += nArray[i];
    }
    return sumAnswer;
}

// test1
const n1 = 1234;
console.log(solution(n1));  // 10

// test2
const n2 = 930211;
console.log(solution(n2));  // 16

// PASS
// 1. 숫자를 문자열로 변환하기
// 2. 문자열을 배열로 변환하기
// 3. 배열 타입을 숫자 타입으로 변환하기
// 4. 배열의 요소를 합하기