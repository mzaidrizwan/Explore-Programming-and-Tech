#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    string text = "C++ is a general purpose programming language.";
    vector<string> words_Collect;
    string word;
    string largestWord;

    for (size_t i = 0; i <= text.length(); i++) {
        if (i == text.length() || text[i] == ' ') {
            if (!word.empty()) {
                words_Collect.push_back(word);
                word = "";
            }
        } else {
            word += text[i];
        }
    }

    largestWord = words_Collect[0];
    
    for (size_t i = 1; i < words_Collect.size(); i++) {
        if (words_Collect[i].size() > largestWord.size()) {
            largestWord = words_Collect[i];
        }
    }

    cout << "\nLargest word is: " << largestWord;
    return 0;
}

