// 진로 순서 정하기
// 스스로 해결하기
function solution(emergency) {
  // let emergencyArray = emergency;
  // let sortedEmergency = [];

  // 1. 배열 emergency를 오름차순으로 정렬하기
  // 1-3. 배열 길이만큼 반복하기
  for (let i = 0; i < emergency.length; i++) {
    // 1-2. 가장 작은 숫자를 찾아 순위 매기기 (인덱스 번호를 저장해두기)
    let minNumber = emergency[0];
    let minIndex = 0;
    for (let i = 0; i < emergency.length; i++) {
      if (emergency[i] < minNumber) {
        minNumber = emergency[i];
        minIndex = i;
      }
    }

    let rank = emergency.length;
    emergency[minIndex] = rank;
    rank--;
  }

  // ranked test code
  for (let i = 0; i < emergency.length; i++) {
    console.log(emergency[i]);
  }

  return emergency;
}

// test1
const emergency1 = [3, 76, 24];
console.log(solution(emergency1));

// ERROR : 어느 부분에서 정렬이 안되는지 모르겠다! ㅜㅜ
// 1. 배열 emergency를 오름차순으로 정렬하기
// 1-2. 가장 작은 숫자를 찾아 순위 매기기 (인덱스 번호를 저장해두기)
// 1-3. 배열 길이만큼 반복하기
