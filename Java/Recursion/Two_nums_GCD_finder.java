public class Two_nums_GCD_finder {

    public static void main(String[] args) {

        int a = 36, b = 27, gcd = 0;

        System.out.println(gcd(a, b, 1, gcd));
    }

    static int gcd(int a, int b, int dividor, int gcd) {
        if (dividor <= a && dividor <= b) {
            if (a % dividor == 0 && b % dividor == 0) {
                gcd = dividor;
            }
        } else {
            return gcd;
        }
        return gcd(a, b, ++dividor, gcd);
    }
}