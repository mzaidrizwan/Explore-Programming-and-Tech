#include <iostream>

using namespace std;

int main()
{
	int a[5] = {-1, 0, 1, 2, 5};
	int b[5] = {3, 4, 5, 7, 9};

	int length_A = sizeof(a) / sizeof(a[0]);
	int length_B = sizeof(b) / sizeof(b[0]);
	int length_C = length_A + length_B;

	int *c = new int[length_C];

	int a_indx = 0, b_indx = 0;

	for (int j = 0; j < length_C; j++)
	{
		if (a_indx < length_A && b_indx < length_B)
		{
			if (a[a_indx] < b[b_indx])
			{
				c[j] = a[a_indx];
				a_indx++;
			}
			else
			{
				c[j] = b[b_indx];
				b_indx++;
			}
		}
		else if (a_indx < length_A)
		{
			c[j] = a[a_indx];
			a_indx++;
		}
		else
		{
			c[j] = b[b_indx];
			b_indx++;
		}
	}

	for (int i = 0; i < length_C; i++)
	{
		cout << c[i] << " ";
	}

	delete[] c; 

	return 0;
}