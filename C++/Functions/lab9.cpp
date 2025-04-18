 #include <iostream>
using namespace std;
int count7(int n);
int main()
{
    int inp = 37717;

    int getFunction = count7(inp);

    cout << "\n\n\n\n"<<getFunction;
}

int count7(int n)
{
    int count = 0;

    while (n > 0)
    {
        int lastDigit = n % 10;
        if (lastDigit == 7)
        {
            ++count;
        }

        n = n / 10;
    }

    return count;
}
