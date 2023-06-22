// 진료 순서 정하기
// 스스로 해결하기
function solution(emergency) {
  // let emergencyArray = emergency;
  let sortedEmergency = [];
  let rank = emergency.length;
  let minIndex = 0;
  // 1. 배열 emergency를 오름차순으로 정렬하기
  // 1-3. 배열 길이만큼 반복하기
  for (let i = 0; i < emergency.length; i++) {
    // 1-2. 가장 작은 숫자를 찾아 순위 매기기 (인덱스 번호를 저장해두기)
    let minNumber = 101;

    for (let j = 0; j < emergency.length; j++) {
      if (emergency[j] < minNumber) {
        minNumber = emergency[j];
        minIndex = j;
      }
    }

    emergency[minIndex] = 10000;

    sortedEmergency[minIndex] = rank;
    rank--;
    console.log(sortedEmergency);
  }

  // console.log("sortedEmergency : ", sortedEmergency);

  return sortedEmergency;
}

// test1
const emergency1 = [3, 76, 24];
console.log(solution(emergency1));

// PASS
// ERROR : 어느 부분에서 정렬이 안되는지 모르겠다! ㅜㅜ
// 1. 배열 emergency를 오름차순으로 정렬하기
// 1-2. 가장 작은 숫자를 찾아 순위 매기기 (인덱스 번호를 저장해두기)
// 1-3. 배열 길이만큼 반복하기
