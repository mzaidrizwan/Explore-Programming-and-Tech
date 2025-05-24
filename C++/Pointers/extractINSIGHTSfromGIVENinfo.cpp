#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main()
{
    char info[50] = "barac 1 sevilla 2,madric 0 barac 0 madric 2";
    char *info_Ptr = info;
    int info_size = 0;
    int jump_detect = 2;
    int j = 0;
    vector<string> eachTeam;
    string element;

    while (*(info_Ptr++) != '\0')
        ++info_size;

    for (size_t i = 0; i < info_size + 1; i++)
    {
        if ((info[i] >= 97 && info[i] <= 122) || (info[i] >= 65 && info[i] <= 90) || ((info[i] >= 48 && info[i] <= 57)))
        {
            element += info[i];
        }
        else
        {
            --jump_detect;
            if (jump_detect < 1)
            {
                eachTeam.push_back(element);
                element = "";
                ++j;
                jump_detect = 2;
            }
        }
    }
    cout << " Result = ";
    for (size_t i = 0; i < eachTeam.size(); i++)
    {
        cout << eachTeam[i] << " ";
    }

    return 0;
}