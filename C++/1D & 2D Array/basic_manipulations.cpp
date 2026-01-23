#include <cstddef>
#include <iostream>
using namespace std;

int sum_and_average(int arr[], int size);
int max(int arr[], int size);
int min(int arr[], int size);
void display_reverse(int arr[], int size);
int second_largest_num(int arr[], int size, int largest);
void each_element_frequency(int arr[], int size);
int main() {
  int size;
  cin >> size;
  int arr[size];
  for (int i = 0; i < size; i++) {
    cin >> arr[i];
  }

  int sum = sum_and_average(arr, size);
  cout << "sum " << sum << " avg " << sum / size << endl;

  int maximum = max(arr, size);
  cout << "max " << maximum << endl;

  cout << "min " << min(arr, size) << endl;

  cout << " displaying in reverse order " << endl;
  display_reverse(arr, size);

  cout << " Second larghest number " << endl;
  cout << second_largest_num(arr, size, maximum) << endl;

  each_element_frequency(arr, size);

  return 0;
}

int sum_and_average(int arr[], int size) {
  int sum = 0;
  for (int i = 0; i < size; i++) {
    sum += arr[i];
  }
  return sum;
}

int max(int arr[], int size) {
  int max = arr[0];
  for (int i = 0; i < size; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

int min(int arr[], int size) {
  int min = arr[0];
  for (int i = 0; i < size; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

void display_reverse(int arr[], int size) {
  for (int i = size - 1; i >= 0; i--) {
    cout << arr[i] << " ";
  }
}

int second_largest_num(int arr[], int size, int largest) {
  int second_largest = arr[0];
  for (int i = 0; i < size; i++) {
    if (second_largest < arr[i] && arr[i] < largest) {
      second_largest = arr[i];
    }
  }
  return second_largest;
}

void each_element_frequency(int arr[], int size) {
  for (int i = 0; i < size; i++) {
    int toCount,frequency=0;
    if (arr[i] != -1) {
      toCount = arr[i];
    } else {
      continue;
    }
    for (int j = 0; j < size; j++) {
      if (toCount == arr[j]) {
        ++frequency;
      }
    }

    arr[i] = -1;
    cout<< " Frequency of "<<toCount<<" : "<<frequency<<endl;
  }
}