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
    int i = 0;
    vector<string> eachTeamName;
    vector<int> eachTeamscore;
    string element;

    while (*(info_Ptr++) != '\0')
    {
        if ((info[i] >= 97 && info[i] <= 122) || (info[i] >= 65 && info[i] <= 90) )
        {
            element += info[i];
        }
        else if (info[i] >= 48 && info[i] <= 57)
        {
         eachTeamscore.push_back(info[i] - 48);   
        }
        else
        {
            --jump_detect;
            if (jump_detect < 1)
            {
                eachTeamName.push_back(element);
                element = "";
                ++j;
                jump_detect = 2;
            }
        }
        if (*(info_Ptr) == '\0')
            eachTeamName.push_back(element);
        i++;
    }
   
    cout << " Result = ";
    for (size_t i = 0; i < eachTeamName.size(); i++)
    {
        cout << eachTeamName[i] << " ";
    }

    cout << " \n\nResult = ";
    for (size_t i = 0; i < eachTeamscore.size(); i++)
    {
        cout << eachTeamscore[i] << " ";
    }

    



    return 0;
}