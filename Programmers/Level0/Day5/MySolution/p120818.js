// 옷가게 할인 받기
// 스스로 풀어보기
function solution(price) {
    
    // 1. 조건에 따른 할인률 계산하기
    let salePercent = 0;

    // 1-3. if. 50만원 이상 20% 할인
    if(price >= 500000) {
        salePercent = 20;
    // 1-2. if. 30만원 이상 10% 할인
    } else if(price >= 300000) {
        salePercent = 10;
    // 1-1. if. 10만원 이상 5% 할인
    } else if(price >= 100000) {
        salePercent = 5;
    }

    // 2. 지불해야할 금액을 계산하기
    const payment = Math.floor(price * ((100 - salePercent) / 100));

    return payment;
    
}

// test1
console.log(solution(150000));

// test2
console.log(solution(580000));

// 1. 조건에 따른 할인률 계산하기
// 1-1. if. 10만원 이상 5% 할인
// 1-2. if. 30만원 이상 10% 할인
// 1-3. if. 50만원 이상 20% 할인
// 2. 지불해야할 금액을 계산하기