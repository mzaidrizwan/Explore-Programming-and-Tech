#include <iostream>
using namespace std;

int fib(int a, int b); 
 int length;
int main()
{
   
    cout << "Enter Length";
    cin >> length;
    int a = 0;
    int b = 1;
   cout << fib(a, b );
    return 0;
}

int fib(int a, int b)
{
    if (a <= length && a+b != 0)
    {
        cout << a << " , " ;
       int c = a + b;
        a = b;
        return fib(a, c);
    }
    else
    {
        return fib( 0 , 0 );
    }
}
