// * 다시 한번 풀어보기!
function solution(numer1, denom1, numer2, denom2) {
    var answer = [];

    // * 해결방법 : 분수를 더한 후 기약분수를 만들어주고 각 분자, 분모의 값을 반환합니다.

    // 1. 두 개의 분수를 더한 각각의 분모, 분자를 구합니다.
    let denom = denom1 * denom2;  // 분모
    let numer = numer1 * denom2 + numer2 * denom1;  //분자

    // 2. 최대공약수를 구합니다.
    // denom(분모)와 numer(분자) 중 더 작은 수가 최대공약수인지 확인합니다.
    // 그렇지 않을 경우, 1씩 줄이면서 최대공약수를 찾고 반환합니다.
    let minNumber = 0;
    if (denom < numer) {
        minNumber = denom;
    } else {
        minNumber = numer;
    }

    for(let i = minNumber; i > 0; i--) {
        if(denom % i == 0 && numer % i == 0) {
            minNumber = i;
            break;
        }
    }

    // 3. 최종적으로 기약분수를 만듭니다.
    denom = denom / minNumber;  // 분모
    numer = numer / minNumber;  // 분자

    answer = [numer, denom];

    return answer;
}

// test
console.log(solution(1, 2, 3, 4));