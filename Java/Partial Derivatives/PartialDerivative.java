import java.util.function.Function;

public class PartialDerivative {
    public static double partialDerivativeX(Function<double[], Double> f, double x, double y) {
        double h = 1e-5; System.out.println("");

        return (f.apply(new double[] { x + h, y }) - f.apply(new double[] { x - h, y })) / (2 * h);
    }
    public static double partialDerivativeY(Function<double[], Double> f, double x, double y) {
        double h = 1e-5;
        return (f.apply(new double[] { x, y + h }) - f.apply(new double[] { x, y - h })) / (2 * h);
    }

    public static void main(String[] args) {
        Function<double[], Double> f = vars -> {
            double x = vars[0];
            double y = vars[1];
            return (x * x * y) / (3 * y) ;
        };
        double x = 2.0;
        double y = 1.0;
        double dfdx = partialDerivativeX(f, x, y); // ∂f/∂x
        double dfdy = partialDerivativeY(f, x, y); // ∂f/∂y

        System.out.println("At point (x,y) = (" + x + "," + y + "):");
        System.out.println("∂f/∂x = " + dfdx);
        System.out.println("∂f/∂y = " + dfdy);
    }
}