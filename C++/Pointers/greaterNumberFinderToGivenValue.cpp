#include <iostream>
using namespace std;

int countGreaterThan(int *arr, int size, int threshold) {
    int count = 0;
    for (int i = 0; i < size; i++) {
        if (arr[i] > threshold)
            count++;
    }
    return count;
}

int main() {
    int arr[] = {4, 6, 2, 7, 1, 10, 3};
    int size = sizeof(arr) / sizeof(arr[0]);
    int threshold = 5;
    cout << countGreaterThan(arr, size, threshold);
    return 0;
}