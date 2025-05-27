#include <iostream>
#include <string>
using namespace std;
void answer(string e = "NOT Valid");
int main()
{
    int length = 10;
    int letters = 2;
    int digits = 2;
    int finish_task = 1;
    string password = "9ahnvdbFGger1";
    int i = 0;

    while (password[i] ? true : false)
    {
        if ((password[i] >= 97 && password[i] <= 122) || (password[i] >= 65 && password[i] <= 90))
        {
            --letters;
        }
        else if ((password[i] >= 48 && password[i] <= 57))
        {
            --digits;
        }
        else
        {
            answer();
            finish_task = 0;
            break;
        }

        --length;
        ++i;
    }

    if (finish_task)
    {

        if (length <= 0 && letters <= 0 && digits <= 0)
        {
            answer("Valid password");
        }
        else
        {
            answer();
        }

        if (length > 0)
        {
            answer();
        }
    }
    return 0;
}

void answer(string e)
{
    cout << e;
}