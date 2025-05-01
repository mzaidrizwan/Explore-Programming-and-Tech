#include <iostream>
using namespace std;

float sum(float num);

int main() {
	float num = 5.0;
	float result = sum(num);
	cout <<result;
}

float sum(float num) {

	if(num == 1.0) {
		return 1.0;
	}
	else {
		return sum(num-1) + (1/num);
	}

}
