// 배열의 유사도
// 스스로 해결하기
function solution(s1, s2) {
    var answer = 0;
    let equalCount = 0;
    for(let i = 0; i < s1.length; i++) {
        for(let j = 0; j < s2.length; j++) {
            if(s1[i] === s2[j]) {
                equalCount++;
            }
        }
    }
    return equalCount;
}

// test1
const s1_1 = ["a", "b", "c"];
const s2_1 = ["com", "b", "d", "p", "c"];
console.log(solution(s1_1, s2_1));  // 2

// test2
const s1_2 = ["n", "omg"];
const s2_2 = ["m", "dot"];
console.log(solution(s1_2, s2_2));  // 0

// PASS
// 1. s1과 s2 배열을 하나하나 배교하기
// 2. 같은 문자가 나오면 count 늘려주기