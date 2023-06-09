// 중앙값 구하기
// 스스로 풀어보기
function solution(array) {
    var answer = 0;
    // ex ) 배열 길이가 5일때 -> 5 / 2
    // ex2 ) 배열 길이가 7일때 -> 7 / 2
    
    // 1. 배열의 크기에 따라서 정렬합니다.
    array.sort((a, b) => a - b);
    
    // 2. 중앙값의 인덱스값을 구합니다.
    const midIndex = Math.floor(array.length / 2);  // 3 / 2 -> 1
    console.log(midIndex);
    
    // 3. 중앙값을 answer에 대입합니다.
    answer = array[midIndex];
    
    return answer;
}
