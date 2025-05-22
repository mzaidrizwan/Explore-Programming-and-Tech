#include <iostream>
using namespace std;
int main()
{
    int arr[3][3] = {{1, 2, 3},
                     {4, 5, 6},
                     {7, 9, 8}};

    int rows = sizeof(arr) / sizeof(arr[0]);
    int cols = sizeof(arr[0]) / sizeof(arr[0][0]);

    cout << "rows" << rows << " cols" << cols;

    cout <<"\n\n\n\n";

    for (size_t i = 0; i < rows; i++)
    {
        int k = 2;
        for (size_t j = 0; j < cols; j++)
        {
            if (  i % 2 == 0)
            {
                cout << arr[i][j]<<endl;
            }
            else
            {
                cout << arr[i][j + k]<<endl;
                k=k-2;
            }
        };
    };
}