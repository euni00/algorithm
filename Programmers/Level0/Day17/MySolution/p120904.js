// 숫자 찾기
// 스스로 해결하기
function solution(num, k) {
    var indexAnswer = -1;

    let numString = num.toString();
    // console.log(numString); -> OK
    let numArray = [...numString];
    // console.log(numArray); -> OK
    
    for(let i = 0; i < numArray.length; i++) {
        numArray[i] = Number.parseInt(numArray[i]);
    }
    console.log(numArray);

    for(let i = 0; i < numArray.length; i++) {
        if(numArray[i] === k) {
            indexAnswer = i + 1;
            break;
        }
    }

    return indexAnswer;
}

// test1
const num1 = 29183;
const k1 = 1;
console.log(solution(num1, k1));

// test2
const num2 = 232443;
const k2 = 4;
console.log(solution(num2, k2));

// test3
const num3 = 123456;
const k3 = 7;
console.log(solution(num3, k3));

// PASS
// 1. 정수를 문자열로 바꾸기
// 2. 문자열을 배열로 변환하기
// 3. 배열에 있는 문자 타입을 숫자 타입으로 변환하기
// 4. k가 있을 경우 인덱스 반환하기 