#include <iostream>
using namespace std;

double sumTo(int n) ;

int main() {
    int n;
    cout << "Enter a non-negative integer: ";
    cin >> n;
    
    cout << "The sum of the first " << n << " reciprocals is: " << sumTo(n) << endl;
    
    return 0;
}

double sumTo(int n) {
    if (n == 0)
        return 0;           
    return sumTo(n - 1) + 1.0 / n;
}
