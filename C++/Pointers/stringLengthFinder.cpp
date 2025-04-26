#include <iostream>
using namespace std;

int main()
{
    char text[97];
    char *str = text;
    int count = 0;

    while (*(str++) != '\0')
        count++;
    cout << count;
    return 0;
}
