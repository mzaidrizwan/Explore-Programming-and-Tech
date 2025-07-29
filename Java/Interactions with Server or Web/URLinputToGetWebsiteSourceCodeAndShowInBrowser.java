import java.io.FileWriter;
import java.io.BufferedReader;
import java.io.File;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

public class URLinputToGetWebsiteSourceCodeAndShowInBrowser {
    public static void main(String[] args) {
        try {
            FileWriter fileTOWriter = new FileWriter("index.html");
            File myFile = new File("index.html");
            myFile.createNewFile();
            System.out.println("file created successfuly of name " + myFile.getName());

            URL url = new URL("https://www.example.com");
            URLConnection connection = url.openConnection();
            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));

            String line;

            String content = "";

            while ((line = reader.readLine()) != null) {
                content += line;
            }

            fileTOWriter.write(content);
            fileTOWriter.close();

            System.out.println("File content wrote successfuly");
            System.out.println("Now Opening File In Browser...");

            ProcessBuilder processBuilder = new ProcessBuilder("cmd", "/K","D:\\git repos\\Explore-Programming-and-Tech\\Java\\Interactions with Server or Web\\index.html");
            Process start = processBuilder.start();

            reader.close();
        } catch (Exception e) {
            e.printStackTrace();

        }
    }
}