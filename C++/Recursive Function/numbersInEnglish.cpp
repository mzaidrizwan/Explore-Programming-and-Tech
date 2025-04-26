#include <iostream>
#include <string>
using namespace std;
void printDigitsInWords(int num) {
    if (num < 10) {
        string words[] = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
        cout << words[num];
        return;
    }
    
    printDigitsInWords(num / 10);
    
    cout << " ";
    
    int lastDigit = num % 10;
    string words[] = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
    cout << words[lastDigit];
}

int main() {
    int number;
    cout << "Enter an integer: ";
    cin >> number;
    
    if (number < 0) {
        cout << "negative ";
        number = -number;
    }
    
    if (number == 0) {
        cout << "zero" << endl;
    } else {
        printDigitsInWords(number);
        cout << endl;
    }
    
    return 0;
}