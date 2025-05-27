#include <iostream>
#include <string>
using namespace std;
int main()
{
    string inp1 = "aac";
    string inp2 = "aca";
    bool valid = true;

    for (size_t i = 0; (inp1[i] ? true : false); i++)
    {
        int a = 0;
        int b = 0;

        for (size_t k = 0; inp2[k] ? true : false; k++)
        {
            if (inp1[i] == inp2[k])
            {
                ++b;
            }
        }
        char charact = inp1[i];
        for (size_t k = i; inp2[k] ? true : false; k++)
        {

            if (charact == inp1[k] && charact != '-')
            {
                ++a;
                inp1[i] = '-';
            }
        }

        // if (a != b)
        // {
        //     valid = false;
        //     break;
        // }
        cout << " a "<<a <<" b "<<b<<endl;
    }
// (valid ? "Yes" : "No")

    return 0;
}
