// 아이스 아메리카노
// 스스로 풀어보기
function solution(money) {
    var answer = [];

    const coffeePrice = 5500;
    const coffeeCount = Math.floor(money / coffeePrice);
    const returnMoney = money % coffeePrice;

    answer.push(coffeeCount, returnMoney);

    return answer;
}

// test1
const input1 = 5500;
console.log(solution(input1));

// test2
const input2 = 15000;
console.log(solution(input2));

// 1. 머쓱이가 가지고 있는 돈(money)에서 아이스 아메리카노 한잔 값을 나누기
// 2. 몫과 나머지를 반환하기