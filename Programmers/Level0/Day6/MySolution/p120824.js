// 짝수 홀수 개수
// 스스로 해결하기
function solution(num_list) {
    var answer = [];
    let count1 = 0;  // 짝수
    let count2 = 0;  // 홀수
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 == 0) {
            count1++;
        } else {
            count2++;
        }
        
    }
    answer = [count1, count2];
    return answer;
}

// test1
const test1 = [1, 2, 3, 4, 5];
console.log(solution(test1));

// test2
const test2 = [1, 3, 5, 7];
console.log(solution(test2));