#include <iostream>
using namespace std;
int main() {
    int num;
    cout << "ENTER A NUMBER: ";
    cin >> num;

    if (num < 0) {
        cout << "Negative numbers cannot be palindromes." << endl;
        return 1;
    }

    int reversedNum = 0;
    int originalNum = num;

    while (num > 0) {
        int remainder = num % 10;
        reversedNum = reversedNum * 10 + remainder;
        num /= 10;
    }

    cout << "Original Number: " << originalNum << endl;
    cout << "Reversed Number: " << reversedNum << endl;

    bool isPalindrome = (originalNum == reversedNum);
    cout << (isPalindrome ? "YES" : "NO") << endl;

    return 0;
}
