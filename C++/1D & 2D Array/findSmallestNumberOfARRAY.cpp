#include <iostream>

using namespace std;
int main()
{
	int arr[4];
	int arrSize = sizeof(arr) / sizeof(int);

	for (size_t i = 0; i < arrSize; i++)
	{
		cout << "ENTER VALUE OF arr[" << i << "]: ";
		cin >> arr[i];
	}
	int smallest = arr[0];

	for (size_t i = 0; i < arrSize; i++)
	{
		if (smallest > arr[i])
		{
			smallest = arr[i];
		}
	}
	cout << "Smallest number in it: " <<smallest;

	return 0;
}