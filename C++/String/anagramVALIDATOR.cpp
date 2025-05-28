#include <iostream>
#include <string>
using namespace std;
int main()
{
    string inp1 = "election results";
    string inp2 = "lies lets recount";
    bool yes = true;




    for (size_t i = 0; inp1[i] ? true : false; i++)
    {
        bool valid = false;

        for (size_t k = 0; inp1[k] ? true : false; k++)
        {
            // cout << " 2 " << inp2[k] << endl<< " 1 "<<inp1[i];
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

    // (valid ? "Yes" : "No")
    if (yes)
    {
        cout << "\nvalid :-)";
    }

    return 0;
}
