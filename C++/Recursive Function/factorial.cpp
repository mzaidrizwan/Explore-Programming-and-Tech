#include <iostream>
using namespace std;

int fact(int num)

;int main()
{
int num = 7;

int res = fact(num);
cout << res;

    
    return 0;
}



int fact(int num){
    if (num == 1)
    {
    	return 1;
    }
    else
    {   return fact(num - 1) * num;

    }
    

}
