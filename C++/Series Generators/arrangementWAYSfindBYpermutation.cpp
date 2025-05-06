#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main()
{

bool found_Similar = false;
vector<string> possibilities;
string arrange;
    int n = 3;
    int i = 0;

    while (i < n)
    { srand(time(0));
        for (size_t j = 0; j < n; j++)
        {
            int character =rand() % 3 + 97;
            arrange += character; 
        }

        for (size_t j = 0; j < possibilities.size(); j++)
        {
            if (possibilities[j] == arrange)
            {
                found_Similar = true;
            }
        }

        if (!found_Similar)
        {
            possibilities.push_back(arrange);
            arrange = "";
            i++;
        }
        
    }
for (size_t i = 0; i < possibilities.size(); i++)
{
   cout << possibilities[i]<<" ";
}
    
    return 0;
}
