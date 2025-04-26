#include <iostream>
using namespace std;

int countZeros(int n) {
    if (n < 10) {
        return (n == 0) ? 1 : 0;
    }
    
    int add = (n % 10 == 0) ? 1 : 0;
    
    return countZeros(n / 10) + add;
}

int main() {
    int number;
    cout << "Enter a non-negative number: ";
    cin >> number;
    
    cout << "The number of zeros in " << number << " is: " 
         << countZeros(number) << endl;
    
    return 0;
}