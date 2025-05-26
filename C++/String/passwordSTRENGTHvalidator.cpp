#include <iostream>
#include <string>
using namespace std;
void answer(string e = "NOT Valid");
int main()
{
    int length = 10;
    int letters = 2;
    int digits = 2;
    string password = "9ahnvdbfgger67";
    int i = 0;

    while (password[i] ? true : false)
    {
        if (!((password[i] >= 97 && password[i] <= 122) || (password[i] >= 65 && password[i] <= 90) || (password[i] >= 48 && password[i] <= 57)))
        {
            answer();
            break;
        }

        --length;
        ++i;
    }
    if (length <= 0)
    {
        answer("Valid password");
    }
    if(length > 0)
    {
        answer();
    }

    return 0;
}

void answer(string e )
{
    cout << e;
}