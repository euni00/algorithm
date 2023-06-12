// 나이 출력
// 스스로 풀어보기
function solution1(age) {
    let birthYear = 0;

    const standardYear = 22;
    birthYear = standardYear - age;
    birthYear += 2000;
    birthYear += 1;

    return birthYear;
}

function solution2(age) {
    let birthYear = 0;

    const standardYear = 2022;
    birthYear = standardYear - age + 1;
    
    return birthYear;
}


// solution1_test1
const age1 = 40;
console.log(solution1(age1));

// solution1_test2
const age2 = 23;
console.log(solution1(age2));

// solution1_test1
console.log(solution2(age1));

// solution1_test2
console.log(solution2(age2));

// 1 ) 수식으로 풀면..
// 1. 2022년을 기준으로 년도를 계산한다.
// 1-1. 22 - 40 = -18
// 1-2. 2000 - 18 = 1982
// 1-3. 1982 + 1 = 1983

// 2 ) 단순하게..
// 1. 2022년도를 기준으로 사람 나이만큼 빼자.
