// 배열 뒤집기
// 스스로 풀어보기
function solution(num_list) {
    let newList = [];
    
    // 1. 맨 마지막 배열부터 나열하기
    for(let i = 0; i < num_list.length; i++) {
        newList.push(num_list[num_list.length - i - 1])
    }
    
    return newList;
}

// test1
const num_list1 = [1, 2, 3, 4, 5];
console.log(solution(num_list1));

// test2
const num_list2 = [1, 1, 1, 1, 1, 2];
console.log(solution(num_list2));


// test3
const num_list3 = [1, 0, 1, 1, 1, 3, 5];
console.log(solution(num_list3));


// 1. 맨 마지막 배열부터 나열하기