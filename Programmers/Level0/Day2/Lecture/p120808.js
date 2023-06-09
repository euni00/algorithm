// 분수의 덧셈 (강의)
// 기약 분수 : 공통적으로 나눌 수 있는 숫자가 1밖에 없는 경우
function solution(denum1, num1, denum2, num2) {
    // var answer = [];

    // 1. 2개의 분자덧셈
    const denum = denum1 * num2 + denum2 * num1;
    const num = num1 * num2;

    // 2. 분자분모의 최대공약수로 나눠준다.
    // 2-1. 더한 분자분모 중 작은 숫자를 선택한다.
    let minNumber;
    if(denum < num) {
        minNumber = denum;
    } else {
        minNumber = num;
    }


    // 나누어 떨어진다 -> 나머지가 0이다.
    while(true) {
        // 2-2. 분자와 분모에 작은 수를 나눈다.
        if(denum % minNumber === 0) {
            if(num % minNumber === 0) {
                // 2-2-1. 나눠진다면 그 수가 최대공약수이다.
                return [denum / minNumber, num / minNumber];
            }
        }

        // 2-2-2. 나눠지지 않는다면 작은 숫자에서 1를 빼고 2-2. 과정부터 다시 반복한다. (반복문)
        minNumber = minNumber - 1;
    }
    
}

// * solution
// 1. 2개의 분자덧셈
// 2. 분자분모의 최대공약수로 나눠준다.
// 2-1. 더한 분자분모 중 작은 숫자를 선택한다.
// 2-2. 분자와 분모에 작은 수를 나눈다.
// 2-2-1. 나눠진다면 그 수가 최대공약수이다.
// 2-2-2. 나눠지지 않는다면 작은 숫자에서 1를 빼고 2-2. 과정부터 다시 반복한다. (반복문)
