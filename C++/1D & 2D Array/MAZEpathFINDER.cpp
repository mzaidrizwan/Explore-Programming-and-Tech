#include <iostream>
using namespace std;
int main()
{
    char arr[3][3] = {
        {'#', '-', '#'},
        {'-', '-', '-'},
        {'-', '#', '#'}};

    int rows = sizeof(arr) / sizeof(arr[0]);
    int i = 0, j = 0, run = 1;

    while (run)
    {
        if (arr[i][j] == '-')
        {
            arr[i][j] = '+';

            if (i == rows)
            {
                run = 0;
            }
        }
        else
        {
            if (arr[i][j + 1] == '-')
            {
                j++;
            }
            else if (arr[i + 1][j] == '-')
            {
                ++i;
            }
            else if (arr[i][j - 1] == '-')
            {
                j--;
            }
            else if (arr[i - 1][j] == '-')
            {
                i--;
            }
            else
            {

                if (arr[i][j + 1] == '+')
                {
                    arr[i][j] = '^';
                    j++;
                }
                else if (arr[i + 1][j] == '+')
                {
                    arr[i][j] = '^';
                    ++i;
                }
                else if (arr[i][j - 1] == '+')
                {
                    arr[i][j] = '^';
                    j--;
                }
                else if (arr[i - 1][j] == '+')
                {
                    arr[i][j] = '^';
                    i--;
                }
            }
        }
    }

    for (size_t n = 0; n < rows; n++)
    {
        for (size_t k = 0; k < rows; k++)
        {
            cout << arr[n][k] << " ";
        }
        cout << endl;
    }
}