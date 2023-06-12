// 중앙값 구하기 (강의)
// [9, -1, 0]
function solution(array) {
    // var answer = 0;

    // 1. 배열 정렬하기

    // 1-4. 원래 배열 길이 만큼 반복했을 경우 이 과정을 끝낸다. 그렇지 않은 경우 1-1로 돌아가기
    let arrayCnt = 0;
    let sortedArray = [];
    let newArray = [];
    

    
    /*
     이렇게 짜면 가독성이 떨어질까?.. (고민고민)
     let minNumber = array[0];
     for(let i = 0; i < array.length; i++) {
         if(array[i] < minNumber) {
            minNumber = array[i];
            sortedArray.push(minNumber);
             
         }
     }
     */

    while(arrayCnt < array.length) {

    /*
    // 1-1. 배열 중 제일 작은 값 찾기
    // minNumber -> 최종적으로 가장 작은 수
    // -1000 < array의 원소 < 1000 -> minNumber (가장 작은 수)를 1000이라고 가정해보기
        let minNumber = 1000;
        let cnt = 0;
        while(cnt < array.length) {
            if(array[cnt] < minNumber) {
                minNumber = array[cnt];
            }
            cnt += 1;
        }
    */

    // 1-1. 배열의 최소값 찾기
    let minNumber = array[0];
    for(let i = 0; i < array.length; i++) {
        if(array[i] < minNumber) {
            minNumber = array[i];
        }
    }

    console.log(minNumber);



        /*
        if(array[0] < minNumber) {
            minNumber = array[0];
        }
        if(array[1] < minNumber) {
            minNumber = array[1];
        }
        if(array[2] < minNumber) {
            minNumber = array[2];
        }
        */

        // 1-2. 찾으면 새 배열에 넣기
        newArray.push(minNumber);

        // 1-3. 원래 배열에서 넣은 값은 지워주기
        // sol : 최소값에 걸리지 않게 엄청 큰 값으로 바꿔주기
        // [9, -1, 0] -> [9, 100000, 0]
        for(let i = 0; i < array.length; i++) {
            if(minNumber === array[i]) {
                array[i] = 10000;
                break;
            }
        }
        
        /*
        let cnt2 = 0;
        while(cnt2 < array.length) {
            if(minNumber === array[cnt2]) {
                array[cnt2] = 1000;
                break;
            }
            cnt2 += 1;
        }
        */

        
        arrayCnt += 1;
    }

    console.log(newArray);

    // 2. 가운데 값 꺼내기
    return newArray[Math.floor(array.length / 2)];
    
}

// test1
const input1 = [1, 2, 7, 10, 11];
console.log(solution(input1));  

// test2
const input2 = [9, -1, 0];
console.log(solution(input2));  


// #Fatal error in , line 0
// # Fatal JavaScript invalid size error 169220804

// while, for, if문과 같은 본연의 기능을 이용해서 문제 푸는 연습을 먼저 해보자:)
// 1. 배열 정렬하기
// 정렬을 직접하려면 어떻게 해야할지 생각해봅시다!
// [9, -1, 0] -> [-1, 0, 9]
// 1-1. 배열 중 제일 작은 값 찾기
// 1-2. 찾으면 새 배열에 넣기
// 1-3. 원래 배열에서 넣은 값은 지워주기
// 1-4. 원래 배열 길이 만큼 반복했을 경우 이 과정을 끝낸다. 그렇지 않은 경우 1-1로 돌아가기

// 2. 가운데 값 꺼내기
// 배열 길이가 5
// array[2]
// 배열 길이가 3
// array[1]
// 배열 길이가 n
// array[Math.floor(n/2)]

