#include <iostream>
#include <cmath>
using namespace std;
int main() {
	int p;
	int decimal = 0;
	int inp;
	cout << "Write a Binary number and I will convert it to Decimal number: "
	;cin>>inp;
	while (inp) {
		int a = inp % 10;
		inp = inp / 10;

		decimal += a * pow(2, p);
		p++;
	}
	cout << decimal;

	return 0;
}