// 문자열 계산하기
// 스스로 해결하기
function solution(my_string) {
    let splitString = [];
    splitString = my_string.split(" ");
    // console.log("splitString : ", splitString);
    let calcAnswer = Number.parseInt(splitString[0]);
    for(let i = 1; i < splitString.length; i++) {
        if(splitString[i] == "+") {
            calcAnswer = calcAnswer + Number.parseInt(splitString[i+1]);
        } 
        if(splitString[i] == "-") {
            calcAnswer =  calcAnswer - Number.parseInt(splitString[i+1]);
        }
    }
   

    return calcAnswer;
}

// test1
const my_string1 = "3 + 4";
console.log(solution(my_string1));  // 7

// test2
const my_string2= "13 + 23";
console.log(solution(my_string2));  // 36

// test3
const my_string3= "63 - 30";
console.log(solution(my_string3));  // 33

// test4
const my_string4 = "10 - 4 + 5"
console.log(solution(my_string4));  // 11


// ERROR -> 2자리수를 계산할때 오류가 나는 것 같다.
// 1. 문자열을 배열로 변환하기
// 2. 연산하는 방법을 구분하기
// 2-1. if. my_string[2] == '+' -> 더하기 연산
// 2-2. if. my_string[2] == '-' -> 빼기 연산

// ERROR
// * my_string에는 연산자가 적어도 하나 포함되어 있습니다.
// ERROR -> 그렇다면 연산자가 여러개인 경우는?
// 1. 빈칸을 기준으로 문자열을 나누기
// 2. 연산하는 방법을 구분하기
// 2-1. if. my_string[1] == '+' -> 더하기 연산
// 2-2. if. my_string[1] == '-' -> 빼기 연산

// PASS
// 1. 빈칸을 기준으로 문자열을 나누기
// 2-1. if. my_string[2] == '+' -> 더하기 연산
// 2-2. if. my_string[2] == '-' -> 빼기 연산
// 2-1. 배열 첫번째 숫자부터 계산 결과를 누적하면서 배열 길이만큼 실행