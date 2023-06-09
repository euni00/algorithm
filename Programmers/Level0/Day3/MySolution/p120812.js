// 최빈값 구하기
// 스스로 풀어보기
function solution(array) {
    // var answer = 0;
    
    // 1. 0 ~ 999 숫자를 count 하는 배열을 만든다.
    var cnt = new Array(1000);
    /*
    Array test code
    for(let i = 0; i < 1000; i++) {
        console.log(cnt[i]);
    }
    */

    // * 막히는 부분!!
    // 2. array 배열에 어떤 숫자가 몇 개 있는지 검사하기  
    // 2-2. array 배열이 끝날 때 까지 2-1 반복하기
    for(let i = 0; i < array.length; i++) {
        // 2-1. 어떤 숫자가 나왔다면 count 해주기
        // console.log(array[i]);
        cnt[array[i]]++;
        console.log(cnt[array[i]]);  // NaN (Not a Number)
    }
   
    // 3. 어떤 숫자가 가장 많은지 구하기
    let maxNumber = 0;
    for(let i = 0; i < 1000; i++) {
        if(cnt[i] > maxNumber) {
            maxNumber = cnt[i];
        } 
    }

    console.log("maxNumber : ", maxNumber);

    // 3-1. exeption : 가장 큰 수가 여러 개인 경우 -1을 return 해주기
    for(let i = 0; i < 1000; i++) {
        if(maxNumber == cnt[i]) {
            return -1;
        }
    }

    return maxNumber;
}

// test1
const input1 = [1, 2, 3, 3, 3, 4];
console.log(solution(input1));

// test2
const input2 = [1, 1, 2, 2];
console.log(solution(input2));

// test3
const input3 = [1];
console.log(solution(input3));

// 모르겠으면 일단 무식하게 풀어보기!
// 1. 0 ~ 999 숫자를 count 하는 배열 만들기
// 2. array 배열에 어떤 숫자가 몇 개 있는지 검사하기  
// 2-1. 어떤 숫자가 나왔다면 count 해주기
// 2-2. array 배열이 끝날 때 까지 2-1 반복하기
// 3. 어떤 숫자가 가장 많은지 구하기
// 3-1. exeption : 가장 큰 수가 여러 개인 경우 -1을 return 해주기
