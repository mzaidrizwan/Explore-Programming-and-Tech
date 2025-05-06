#include <iostream>
using namespace std;
int sum(int a,int end,int ans);
int main()
{
    int ans=0;
    int start=2;
    int end=11;
    int result = sum(start,end,ans);
    cout << result;
    return 0;
}

int sum(int a,int end,int ans)
{
    if((a==2||a==3)||(a%2!=0 && a%3!=0))
    {
        if(a==end){ return ans+=a; }
        ans+=a++;
        return sum(a,end,ans);
    }
    else
    {
        return sum(++a , end , ans);
    }
    
}