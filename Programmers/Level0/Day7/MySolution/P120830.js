// 양꼬치
// 스스로 해결하기
function solution(n, k) {
  let totalMoney = 0;

  totalMoney = 12000 * n + 2000 * k;

  console.log("totalMoney : ", totalMoney);

  // discountNum = Math.floor(totalMoney / 120000);

  let discountNum = Math.floor(n / 10);

  console.log("discountNum : ", discountNum);

  totalMoney -= 2000 * discountNum;

  return totalMoney;
}

// PASS
// ERROR : 정확도가 부족한 코드 (다시 확인) -> 문제 이해 잘못
// test1
console.log(solution(10, 3)); // 124,000

// test2
console.log(solution(64, 6)); // 768,000

// 1. 총 금액을 계산한다.
// 2. 10인분을 먹을 때마다 2000원을 뺀다.
