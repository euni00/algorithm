// 1. 작성한 코드에 대한 전체적인 풀이 내용
// 숫자 N이 입력되면 3kg과 5kg으로 된 봉지에 나누어 담아서 가장 적은 수의 봉지 개수를 출력하는 문제
// 정확하게 n이 될 수 없는 경우에는 -1을 출력
// while문 사용
// -> 5의 배수가 될때까지 설탕의 무게에서 3씩 빼가는 방식
// -> 코드가 나누어 떨어지지 않는 경우 -1을 출력

// 2.
#include <iostream>
using namespace std;
int main()
{
    int weigth;
    cin >> weigth;
    int a, b;
    a = weigth / 5;
    while (1)
    {
        if (a < 0)
        {
            cout << "-1";
            return 0;
        }
        if ((weigth - (5 * a)) % 3 == 0)
        {
            b = (weigth - (5 * a)) / 3;
            break;
        }
        a--;
    }
    cout << a + b;
    return 0;
}
