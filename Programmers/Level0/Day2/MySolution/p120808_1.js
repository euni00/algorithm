// 분수의 덧셈
// * 최대한 고민 많이 하면서 풀기
function solution(numer1, denom1, numer2, denom2) {
    
    // 수식 : numer1 / denom1 + numer2 / denom2 = (numer1 * denom2 + numer2 * denom1) / (denom1 * denom2)
       
       
       // 1. 두 분수를 더한 값의 분자, 분모를 구한다.
       const numer = numer1 * denom2 + numer2 * denom1;  // 10
       // console.log(numer);
       const demon = denom1 * denom2;  // 8
       // console.log(demon);
   
       // 2. * 두 수의 최대공약수를 구한다. ??
       // 분자와 분모 둘 중 작은 숫자를 선택한 후 나눠준다. 
       // if, 나눠떨어지지 않는다면 1씩 줄이면서 나눠지는 값을 찾는다.
       // int bothNumber = ??
       let minNumber = 0;
       // 2-1. 두 수 중 작은 수를 구한다.
       if (numer < demon) {
               minNumber = numer;
       } else {
               minNumber = demon;
       }
       
       // 2-2. 최대공약수를 구한다.
       // minNumber부터 1씩 줄이면서 최대공약수인지 검사한다.
       for(let i = minNumber; i > 0; i--) {
           if (numer % i == 0 && demon % i == 0) {
                 minNumber = i;
                 break;
             }
         }  
       
       console.log(minNumber);
       // console.log(solution(1, 2, 3, 4));
   
       // 3. 두 수를 최대공약수로 나누고, 리턴해준다.
       const result1 = numer / minNumber;
       const result2 = demon / minNumber;
       const answer = [result1, result2];
       return answer;
}

console.log(solution(1, 2, 3, 4));