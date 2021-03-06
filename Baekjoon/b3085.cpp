#include <iostream>
#include <algorithm>
using namespace std;
char a[51][51];
int ans;
int n;
void check(); // 함수 선언
int main()
{
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            cin >> a[i][j];
        }
    }
    // 행 바꾸기
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n - 1; j++)
        {
            swap(a[i][j], a[i][j + 1]);
            check();
            swap(a[i][j], a[i][j + 1]);
        }
    }
    // 열 바꾸기
    for (int j = 0; j < n; j++)
    {
        for (int i = 0; i < n - 1; i++)
        {
            swap(a[i][j], a[i + 1][j]);
            check();
            swap(a[i][j], a[i + 1][j]);
        }
    }
    cout << ans;
}

void check()
{
    char c;
    // 행 계산
    for (int i = 0; i < n; i++)
    {
        int count = 1;
        c = a[i][0];
        for (int j = 1; j < n; j++)
        {
            if (a[i][j] == c)
            {
                count += 1;
            }
            else
                count = 1;
            c = a[i][j];
            if (count > ans)
                ans = count;
        }
    }
    // 열 계산
    for (int j = 0; j < n; j++)
    {
        int count = 1;
        c = a[0][j];
        for (int i = 1; i < n; i++)
        {
            if (a[i][j] == c)
            {
                count += 1;
            }
            else
                count = 1;
            c = a[i][j];
            if (count > ans)
                ans = count;
        }
    }
}
