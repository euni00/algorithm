// 문자열 정렬하기 (2)
// 스스로 해결하기
function solution(my_string) {
    var sortedAlpha = '';

    let myArray = [...my_string];
    for(let i = 0; i < myArray.length; i++) {
        if(myArray[i] === myArray[i].toUpperCase()) {
            myArray[i] = myArray[i].toLowerCase();
        }
    }
    // console.log("lowerCase myArray : ", myArray); -> OK

    myArray.sort();
    // console.log("sorted myArray : ", myArray);

    sortedAlpha = myArray.join('');

    return sortedAlpha;
}

// test1
const my_string1 = "Bcad";
console.log(solution(my_string1));  // "abcd"

// test2
const my_string2 = "heLLo";
console.log(solution(my_string2));  // "ehllo"

// test3
const my_string3 = "Python";
console.log(solution(my_string3));  // "hnopty"

// PASS
// 1. 문자열을 배열로 변환하기
// 2. 배열 모두 소문자로 변경하기
// 2-1. 대문자인 경우 소문자로 변경하기
// 3. 다시 문자열로 변경하기
// 4. 알파벳 순으로 정렬하고 반환하기