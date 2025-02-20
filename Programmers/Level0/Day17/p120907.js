// OX퀴즈
// 스스로 해결하기
function solution(quiz) {
    var oxAnswer = [];

    for(let i = 0; i < quiz.length; i++) {
        let sumNum = 0;
        let quizArray = quiz[i].split(" ");
        console.log("quizArray : ", quizArray);

        if(quizArray[1] == "+") {
            sumNum = Number.parseInt(quizArray[0]) + Number.parseInt(quizArray[2]);
        } else {
            sumNum = Number.parseInt(quizArray[0]) - Number.parseInt(quizArray[2]);
        }
        console.log("sumNum : ", sumNum);

        if(sumNum === Number.parseInt(quizArray[4])) {
            oxAnswer.push("O");
        } else {
            oxAnswer.push("X");
        }
    }

    return oxAnswer;
}

// test1 
const quiz1 = ["3 - 4 = -3", "5 + 6 = 11"];
console.log(solution(quiz1));  // ["X", "O"]

// test2
const quiz2 = ["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"];
console.log(solution(quiz2));  // ["O", "O", "X", "O"]

// PASS
// 1. 문자열을 빈칸을 기준으로 나누기
// 1-1. 수식에 따른 +, - 연산해주고 연산결과와 일치한지 확인하기
// 1-2. 일치하는 경우 "O", 일치하지 않는 경우 "X"를 새로운 배열에 추가허가
// 1-3. quiz 배열 길이만큼 반복하기
// 2. 새로운 배열 반환하기