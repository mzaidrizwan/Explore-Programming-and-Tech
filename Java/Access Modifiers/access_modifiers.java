public class access_modifiers {
    public static void main(String[] args) {
        class1 z = new class1();

        // System.out.println(z.a); could not access due to PRIVATE
        // z.a = 4; could not change due to PRIVATE
        System.out.println(z.getB());


    }

}

class class1 {
    private int a = 5; // protected from outer classes
    float b = 4f;

    float getB() {
        return b;
    }

    int getA() {
        return a;
    }

}