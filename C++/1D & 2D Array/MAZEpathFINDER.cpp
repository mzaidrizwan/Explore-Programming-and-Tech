#include <iostream>
using namespace std;
int main()
{
    // char arr[3][3] = {
    //     {'#', '-', '#'},
    //     {'-', '-', '-'},
    //     {'-', '#', '#'}};

    char arr[5][5] = {
        {'#', '#', '-', '#', '#'},
        {'#', '-', '-', '-', '#'},
        {'#', '-', '#', '-', '#'},
        {'#', '-', '-', '-', '#'},
        {'#', '#', '-', '#', '#'}};

    int rows = sizeof(arr) / sizeof(arr[0]) - 1;
    int cols = sizeof(arr[0]) / sizeof(arr[0][0]) - 1;
    int i = 0, j = 0;

    cout << "rows" << rows << endl
         << "cols" << cols << endl;
    cout << endl;

    while (true)
    {
        if (arr[i][j] == '-')
        {
            arr[i][j] = '+';

            if (i == rows)
            {
                break;
            }
        }
        else
        {
            if (arr[i][j + 1] == '-' && j + 1 <= cols)
            {
                j++;
            }
            else if (arr[i + 1][j] == '-' && i + 1 <= rows)
            {
                ++i;
            }
            else if (arr[i][j - 1] == '-' && j - 1 >= 0)
            {
                j--;
            }
            else if (arr[i - 1][j] == '-' && i - 1 >= 0)
            {
                i--;
            }
            else
            {

                if (arr[i][j + 1] == '+' && j + 1 <= cols)
                {
                    arr[i][j] = '^';
                    j++;
                }
                else if (arr[i + 1][j] == '+' && i + 1 <= rows)
                {
                    arr[i][j] = '^';
                    ++i;
                }
                else if (arr[i][j - 1] == '+' && j - 1 >= 0)
                {
                    arr[i][j] = '^';
                    j--;
                }
                else if (arr[i - 1][j] == '+' && i - 1 >= 0)
                {
                    arr[i][j] = '^';
                    i--;
                }
            }
        }
    }

    for (size_t m = 0; m <= rows; m++)
    {
        for (size_t k = 0; k <= cols; k++)
        {
            if (arr[m][k] == '^')
            {
                arr[m][k] = '-';
            }

            cout << arr[m][k] << " ";
        }
        cout << endl;
    }
}