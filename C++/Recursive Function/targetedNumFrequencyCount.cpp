#include <iostream>
using namespace std;

int freq(int num);
int repeat = 0;

int main()
{
    int num;
    cout << "Enter a non-negative number: ";
    cin >> num;
    cout << freq(num);
    return 0;
}

int freq(int num)
{
    if (num > 0)
    {
        if (num % 10 == 0)
        {
            ++repeat;
        }
        return freq(num / 10);
    }
    else
    {
        return repeat;
    }
}
