#include <cstdio>
#include <iostream>
#include <cmath>

using namespace std;

int i, j, result;
int N;

void divide(int x, int y, int n)
{
    if (x == i && y == j)
    {
        printf("%d", result);
        exit(0);
    }
    if (i <= x + n - 1 && j <= y + n - 1)
        ;
    else
    {
        result += n * n;
        return;
    }
    divide(x, y, n / 2);                 // SECTION A
    divide(x, y + n / 2, n / 2);         // SECTION B
    divide(x + n / 2, y, n / 2);         // SECTION C
    divide(x + n / 2, y + n / 2, n / 2); // SECTION D
}
int main()
{
    scanf("%d", &N);
    scanf("%d %d", &i, &j);

    divide(0, 0, pow(2, N));
    divide(1, 1, pow(2, N));
}
