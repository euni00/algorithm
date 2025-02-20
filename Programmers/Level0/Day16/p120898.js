// 편지
// 스스로 해결하기
function solution(message) {
    const messageLength = 2 * message.length;
    return messageLength;
}

// test1
const message1 = "happy birthday!";
console.log(solution(message1));  // 30

// test2
const message2 = "I love you~";
console.log(solution(message2));  // 22

// PASS
// 편지지의 최소 가로 길이 = 2cm * 글자 길이 구하기