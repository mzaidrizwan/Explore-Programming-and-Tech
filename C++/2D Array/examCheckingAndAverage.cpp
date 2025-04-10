#include <iostream>
#include <ctime>
#include <cstdlib>
using namespace std;

float averageFind(int marks, int numberOf_student);

int main() {
    srand(time(0));
    int marks = 0;
    int numberOf_student;
    int numberOfQuestion;
    cout << "How many of Students attempted Test: ";
    cin >> numberOf_student;
    cout << "How many Questions were asked in Test? ";
    cin >> numberOfQuestion;

    char key[numberOfQuestion] = {'D', 'B', 'D', 'C', 'C', 'D', 'A', 'E', 'A', 'D'};
    char record[numberOfQuestion][numberOf_student]; 

    for (size_t i = 0; i < numberOf_student; i++) {
        cout << "Student " << 1 + i << ":";
        for (size_t j = 0; j < numberOfQuestion; j++) {
            int random = rand() % 5 + 65; // to get A to E
            record[i][j] = (char)random;
            cout << record[i][j] << " ";
            if (record[i][j] == key[j]) {
                ++marks;
            }
        }
        cout << endl;
    }

    float result = averageFind(marks, numberOf_student);
    cout << "\n\nAverage Marks each student has get: " << result;
}

float averageFind(int marks, int numberOf_student) {
    float avg = 1.0 * marks / numberOf_student;
    return avg;
}