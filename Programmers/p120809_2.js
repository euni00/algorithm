function solution(numbers) {
    var answer = [];
    
    /*
    push는 몇번? 배열의 길이만큼 출력해야 한다.
    answer.push(numbers[0] * 2);
    answer.push(numbers[1] * 2);
    answer.push(numbers[2] * 2);
    answer.push(numbers[3] * 2);
    answer.push(numbers[4] * 2);
    */

    /*
    let cnt = 0;
    while(cnt < 10) {
        console.log(cnt);
        cnt = cnt + 1;
    }
    */

    let cnt = 0;
    while(cnt < 10) {
        answer.push(numbers[cnt] * 2);
        cnt = cnt + 1;
    }

    return answer;
}





// 1. numbers에서 원소를 꺼내야 합니다.

// numbers [1, 2, 3, 4, 5]
// numbers[0]
// numbers[4]

// 2. 원소를 꺼내 2배를 한 수 새 배열에 넣어줘야 합니다.

// * push 함수 사용해보기
// answer.push(1);