import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Pattern_and_Matcher_class {
    public static void main(String[] args) {
        String text = "Key takeaways to strengthen reasoning\n" + //
                        "Linear in x or y ⇒ average over an interval equals midpoint of endpoint values.\n" + //
                        "\n" + //
                        "Plane = a + b x + c y ⇒ average over rectangle equals value at the center.\n" + //
                        "\n" + //
                        "For rectangles and planes, you can alsio average the four corners.\n" + //
                        "\n" + //
                        "All three roads give the same, robust conclusion: the volume is 1.";
       Pattern pattern = Pattern.compile("also",Pattern.CASE_INSENSITIVE);
       Matcher matcher = pattern.matcher(text);

       System.out.println(matcher.find() ? "Found": "Not Exist");
    }
}
