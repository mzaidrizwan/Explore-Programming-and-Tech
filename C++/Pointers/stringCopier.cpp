#include <iostream>
using namespace std;

int main()
{
    char inp1[100], inp2[100];

    cin >> inp1;

    char* inp1_Ptr = inp1;
    char* inp2_Ptr = inp2;

    while (*inp1_Ptr != '\0')
    {
         *inp2_Ptr = *inp1_Ptr;
        inp1_Ptr++;
        inp2_Ptr++;
     
    }   cout << inp2 << endl;

    return 0;
}
