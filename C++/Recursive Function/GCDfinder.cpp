#include <iostream>
using namespace std;
int gcd(int a, int b, int p, int gcd_);
int main()
{
    cout << endl;
    int a = 15+3, b = 36, p = 1, gcd_;

    cout << gcd(a, b, p, gcd_);

    return 0;
}
int gcd(int a, int b, int p, int gcd_)
{
    if (a >= p && b >= p)
    {
        if (a % p == 0 && b % p == 0)
        {
            gcd_=p;
        }

        return gcd(a, b, ++p, gcd_);
    }
    else
    {
        return gcd_;
    }
}