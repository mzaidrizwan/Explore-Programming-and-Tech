#include <iostream>
using namespace std;
int main()
{
    int row_col_length = 3;
    int inp_arr[row_col_length][row_col_length] = {{1, 2, 3},
                                                   {4, 5, 6},
                                                   {7, 9, 8}};

    int arr[row_col_length][row_col_length];

    int position = row_col_length - 1;

    for (size_t i = 0; i < row_col_length; i++)
    {
        for (size_t k = 0; k < row_col_length; k++)
        {
            arr[k][position] = inp_arr[i][k];
        }
        --position;
    }

    for (size_t i = 0; i < row_col_length; i++)
    {
        for (size_t k = 0; k < row_col_length; k++)
        {
            cout << arr[i][k] << " ";
        }
        cout << endl;
    }

    return 0;
}
