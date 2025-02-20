// n의 배수 고르기
// 스스로 해결하기
function solution(n, numlist) {
    var newArray = [];
    for(let i = 0; i < numlist.length; i++) {
        if(numlist[i] % n == 0) {
            newArray.push(numlist[i]);
        }
    }
    return newArray;
}

// test1
const n1 = 3;
const numlist1 = [4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(solution(n1, numlist1));

// test2
const n2 = 5;
const numlist2 = [1, 9, 3, 10, 13, 5];
console.log(solution(n2, numlist2));

// test3
const n3 = 12;
const numlist3 = [2, 100, 120, 600, 12, 12];
console.log(solution(n3, numlist3));

// PASS
// 1. n의 배수 찾아내기
// 1-1. n의 배수일 경우 새로운 배열에 추가하기
// 1-2. 배열 길이만큼 실행하기
// 2. 새로운 배열 반환하기