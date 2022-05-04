#include <iostream>
using namespace std;
int main() {
    int weigth;
    cin >> weigth;
    int a, b;
    a = weigth/5;
    while(1) {
        if(a < 0) {
            cout << "-1";
            return 0;
        }
        if((weigth-(5*a)) % 3 == 0) {
            b = (weigth-(5*a))/3;
            break;
        }
        a--;
    }
    cout << a+b;
    return 0;
}