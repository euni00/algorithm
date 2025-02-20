// 문자열안에 문자열
// 스스로 해결하기
function solution(str1, str2) {
    var containNum = 2;
    /*
    if(str1.includes(str2)) {
        containNum = 1;
    } else {
        containNum = 2;
    }
    */

    let str1Array = [...str1];
    let str2Array = [...str2];

    // let firstIndex = 0;
    // 2-3. str2 배열 길이만큼 실행 
    /*
        for(let j = 0; j < str1Array.length; j++) {
            if(str2Array[0] === str1Array[j]) {
                console.log("j : ", j);
                if(str2Array[1] === str1Array[j+1]) {
                    if(str2Array[2] === str1Array[j+2]) {
                        // 2-3. str2 배열 길이만큼 실행해서 문자가 모두 일치할때 1을 반환
                        console.log("containNum -> 1");
                        containNum = 1;
                        console.log("break!!!");
                        break;
                    } else {
                        continue;
                    }
                } else {
                    continue;
                }
            } else {
                continue;
            }
            console.log("After j : ", j);
            if(j === str1.length - 1) {
                containNum = 2;
                console.log("OK");
            }
        }
        */
        
        
        for(let i = 0; i < str1Array.length - str2Array.length + 1; i++) {
            let result = true;
            // let newArray = [];
            for(let j = 0; j < str2Array.length; j++) {
                if(str2Array[j] !== str1Array[i+j]) {
                  result = false;
                } else {
                    continue;
                }
            }

            if(result === true) {
                containNum = 1;
            }
        }

        
    
    return containNum;
}


// test1
const str1_1 = "ab6CDE443fgh22iJKlmn1o";
const str2_1 = "6CD";
console.log(solution(str1_1, str2_1));

// test2
const str1_2 = "ppprrrogrammers";
const str2_2 = "pppp";
console.log(solution(str1_2, str2_2));

// test3
const str1_3 = "AbcAbcA";
const str2_3 = "AAA";
console.log(solution(str1_3, str2_3));

// 있다면 1
// 없다면 2
// str1.includes(str2) : str1에 str2 문자열이 포함되어 있는지
// 함수를 사용하지 않고 풀어야 한다면 어떻게 풀어야 할까?..
// ...

// 0. str1과 str2를 배열로 바꾼다.
// 1. str2의 첫번쨰 문자가 str1에 나오는지 확인한다.
// 1-1. 나온다면 2번 실행
// 1-2. str1 길이만큼 실행했는데 첫번째 문자가 나오지 않으면 2를 반환
// 2. str2의 두번째 문자가 바로 다음으로 나오는지 확인
// 2-1. 나오면 3번 실행
// 2-2. 나오지 않으면 1번 실행
// 2-3. str2 배열 길이만큼 실행해서 문자가 모두 일치할때 1을 반환

