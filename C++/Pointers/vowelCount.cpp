#include <iostream>
using namespace std;

int main()
{

    char inp[50];
    cin >> inp;
int count = 0;
    char *ptr = inp;
    while (*ptr != '\0')
    {
        if (*ptr == 'a' || *ptr == 'e' 
		|| *ptr == 'i' || *ptr == 'o' || *ptr == 'u')
            ++count;
               
            *ptr++;
    }
    cout << count;

    return 0;
}
