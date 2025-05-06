#include <iostream>

using namespace std;

int main() {
	int a;
	cout<< "PLEASE ENTER REQUIRED LENGTH OF SQUARE SIDES: ";
	cin >> a;
	int j = 1;
	for (size_t i = 1; i <= a * a; i++) {

		if (i <= a || i >= ((a * a) - a)) {


			if((a*a)-(a-1) == i) {
				cout << "\n";
			}

			cout << "*";
		} else if ((a * j + 1) == i ) {

			cout << "\n";


			cout << "*";
			++j;
		} else if (a * j == i) {
			cout << "*";
		} else {
			cout << " ";
		}
	}

	return 0;
}
