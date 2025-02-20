// 개미군단
// 스스로 해결하기
function solution(hp) {
  var antCount = 0;
  const antAttack = [5, 3, 1];
  // 1. 개미의 수를 구하기
  for (let i = 0; i < antAttack.length; i++) {
    antCount += Math.floor(hp / antAttack[i]);
    hp = hp % antAttack[i];
  }

  return antCount;
}

// test1
const hp1 = 23;
console.log(solution(hp1)); // 5

// test2
const hp2 = 24;
console.log(solution(hp2)); // 6

// test1
const hp3 = 999;
console.log(solution(hp3)); // 201

// Pass
// 장군개미 -> 공격력 5
// 병정개미 -> 공격력 3
// 일개미 -> 공격력 1

// 1. 개미의 수를 구하기
// 1-1. hp을 공격력으로 나누기.
// 1-2. 몫은 필요한 개미의 수가 되고 그 나머지는 다른 종류의 개미 수를 구한다.
// 1-3. 개미의 종류만큼 반복한다.
