// 최빈값 구하기 (강의)
function solution(array) {
    // var answer = 0;
    let sortedArray = array.sort((a, b) => a - b);
    let cnt = 0;
 
    // 1. 앞에서부터 차례대로 원소를 확인하며 갯수 세기
    let mode = -1;           // 최종 최빈값
    let modeRepeatCnt = 0;   // 최종으로 몇 번 반복한 최빈값인지
    let repeatCnt = 0;       // 현재 숫자가 몇 번 반복했는지
    let beforeNumber = -1;   // 현재 보고 있는 숫자 (이전 숫자)
    let isDupMode = false;
    while(cnt < array.length) {
        if(beforeNumber !== array[cnt]) {
            repeatCnt = 1;
        } else {
            repeatCnt += 1;
        }

        if(repeatCnt === modeRepeatCnt) {
            if(mode !== array[cnt]) {
                isDupMode = true;  // ??
            }
        }

        // 2. 최빈값을 그때그때 기록하기
        if(repeatCnt > modeRepeatCnt) {
            mode = array[cnt];
            modeRepeatCnt = repeatCnt;
            isDupMode = false;
        }

        beforeNumber = array[cnt];
        cnt += 1;
    }
    if(isDupMode) return -1;
    return mode;
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

// 1 0 1 2 1 0 3
// 0 0 1 1 1 2 3 (정렬)

// 1. 앞에서부터 차례대로 원소를 확인하며 갯수 세기
// 2. 최빈값을 그때그때 기록하기
// 2-1. exception : 최빈값이 2개일때 -1을 return

