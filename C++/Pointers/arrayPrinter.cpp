#include <iostream>
using namespace std;



int main()
{

    int arr[5] = {21, 45, 54, 23, 9};
    int *arrPtr = arr;
    while (*arrPtr != '\0')
    {
        cout << arrPtr << endl;
         *arrPtr++;
    }




    
    return 0;
}




}