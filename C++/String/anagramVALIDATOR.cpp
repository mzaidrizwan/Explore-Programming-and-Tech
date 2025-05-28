#include <iostream>
#include <string>
using namespace std;
int main()
{
    string a = "electION rESULTs";
    string b = "liEs lETs recOunt";
    string inp1, inp2;
    int size_b=0;
    int size_a = 0;
    int j=0;
int m = 0;
    bool yes = true;

    for (size_t i = 0; a[i] != '\0'; i++)
    {
        if (a[i] >= 65 && a[i] <= 90)
        {
            inp1[j] = a[i] + 32;
            ++j;
            ++size_a;
        }
        else if (a[i] >= 97 && a[i] <= 122)
        {
            inp1[j] = a[i];
            ++j;
            ++size_a;
        }
    }

    for (size_t i = 0; b[i] ? 1 : 0; i++)
    {
        if (b[i] >= 65 && b[i] <= 90)
        {
            inp2[m] = b[i] + 32;
            ++m;
            ++size_b;
        }
        else if (b[i] >= 97 && b[i] <= 122)
        {
            inp2[m] = b[i];
            ++m;
            ++size_b;
        }
    }

    if (size_a == size_b)
    {

        for (size_t i = 0; inp1[i] ? true : false; i++)
        {
            bool valid = false;

            for (size_t k = 0; inp1[k] ? true : false; k++)
            {
                if (inp2[k] != '-' && inp1[i] == inp2[k])
                {
                    valid = true;
                    inp2[k] = '-';
                    break;
                }
            }

            if (!valid)
            {
                cout << "\nNot valid :-(";
                yes = false;
                break;
            }
        }

        if (yes)
        {
            cout << "\nvalid :-)";
        }
    }
    else
    {
        cout << "\nNot valid :-(";
    }

    return 0;
}
