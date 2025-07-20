public class Shell {
    public static void main(String[] args) {
        try {
            Runtime.getRuntime().exec(new String[] { "cmd", "/K", "notepad file.txt" });
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
