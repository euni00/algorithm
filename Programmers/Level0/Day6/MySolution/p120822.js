// 문자열 뒤집기
// 스스로 해결하기
function solution(my_string) {
    let newString = '';

    // Spread Operator
    // 1. 문자열을 배열로 변환하기
    const spreadArray = [...my_string];

    console.log(spreadArray);
    // console.log(spreadArray[3]);

    // 2. 문자열을 뒤집기
    let reverseArray = [];
    for(let i = 0; i < spreadArray.length; i++) {
        reverseArray.push(spreadArray[spreadArray.length - i - 1]);
    }

    console.log("reverseArray : ", reverseArray);

    // 3. 새로운 문자열 만들기
    /*
    for(let i = 0; i < reverseArray.length; i++) {
        newString.join(reverseArray[i]);
    }
    */

    newString = reverseArray.join('');

    console.log("newString : ", newString);

    return newString;
}

// test1
console.log("test1")
const my_string1 = "jaron";
console.log(solution(my_string1));

// test2
console.log("test2");
const my_string2 = "bread";
console.log(solution(my_string2));

// * Spread Operator, join
// 1. 문자열을 배열로 변환하기
// 2. 문자열을 뒤집기
// 3. 새로운 문자열 만들기