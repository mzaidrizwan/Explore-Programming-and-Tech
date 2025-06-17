#include <iostream>
using namespace std;

bool should_initialize_again;
int confused;
void ask_if_Confused();
int main()
{

    char arr[5][5] = {
        {'#', '#', ' ', '#', ' '},
        {'#', '#', ' ', '#', ' '},
        {'#', ' ', '#', ' ', '#'},
        {'#', ' ', ' ', ' ', '#'},
        {'#', '#', ' ', '#', '#'}};

    int rows = sizeof(arr) / sizeof(arr[0]) - 1;
    int cols = sizeof(arr[0]) / sizeof(arr[0][0]) - 1;
    int i = 0, j;

    cout << "rows" << rows << endl
         << "cols" << cols << endl;
    cout << endl;

    cout << "j = " << j << endl;

    while (true)
    {
        should_initialize_again = true;

        if (!should_initialize_again)
        {

            if (arr[i][j] == ' ')
            {
                ask_if_Confused();
                arr[i][j] = '+';

                if (i == rows)
                {
                    break;
                }
            }
            else
            {
                if (arr[i][j + 1] == ' ' && j + 1 <= cols)
                {
                    ask_if_Confused();
                    j++;
                }
                else if (arr[i + 1][j] == ' ' && i + 1 <= rows)
                {
                    ask_if_Confused();
                    ++i;
                }
                else if (arr[i][j - 1] == ' ' && j - 1 >= 0)
                {
                    ask_if_Confused();
                    j--;
                }
                else if (arr[i - 1][j] == ' ' && i - 1 >= 0)
                {
                    ask_if_Confused();
                    i--;
                }
                else
                {
                    ask_if_Confused();

                    if (arr[i][j + 1] == '+' && j + 1 <= cols)
                    {
                        ask_if_Confused();
                        arr[i][j] = '^';
                        j++;
                    }
                    else if (arr[i + 1][j] == '+' && i + 1 <= rows)
                    {
                        ask_if_Confused();
                        arr[i][j] = '^';
                        ++i;
                    }
                    else if (arr[i][j - 1] == '+' && j - 1 >= 0)
                    {
                        ask_if_Confused();
                        arr[i][j] = '^';
                        j--;
                    }
                    else if (arr[i - 1][j] == '+' && i - 1 >= 0)
                    {
                        ask_if_Confused();
                        arr[i][j] = '^';
                        i--;
                    }
                }
            }
        }

        if (should_initialize_again)
        {
            bool isStartingPointAvailable = false;

            for (size_t m = 0; m <= cols; m++)
            {

                if (arr[i][m] == ' ')
                {
                    j = m;
                    isStartingPointAvailable = true;
                    break;
                }
            }
            should_initialize_again = false;
            if (!isStartingPointAvailable)
            {
                cout << "no valid point available to start.";
                break;
            }
        }
    }
    // =========================[SHOW OUTPUT]=====================
    for (size_t m = 0; m <= rows; m++)
    {
        for (size_t k = 0; k <= cols; k++)
        {
            if (arr[m][k] == '^')
            {
                arr[m][k] = ' ';
            }

            cout << arr[m][k] << " ";
        }
        cout << endl;
    }
}

void ask_if_Confused()
{
    should_initialize_again = false;
}
