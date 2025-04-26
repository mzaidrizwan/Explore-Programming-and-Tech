#include <iostream>
#include <string>
using namespace std;

string removeX(const string &s) {
    if (s.empty())
        return "";
    if (s[0] == 'x')
        return removeX(s.substr(1));
    return s[0] + removeX(s.substr(1));
}

int main() {
    string input;
    getline(cin, input);
    cout << removeX(input) << endl;
    return 0;
}