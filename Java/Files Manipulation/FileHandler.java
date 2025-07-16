// import java.io.FileWriter;
import java.io.File;
// import java.util.Scanner;

public class FileHandler {
    public static void main(String[] args) {

        // ---------------------Create a File-----------------
        File myFile = new File("myFirstFile.txt");
        try {
        myFile.createNewFile();
        System.out.println("file created successfuly of name " + myFile.getName());
        } catch (Exception e) {
        System.out.println("Error: " + e);
        }

        // ---------------------Read content of File-----------------
        // try {
        // File file = new File("myFirstFile.txt");
        // Scanner fileReader = new Scanner(file);
        // while (fileReader.hasNextLine()) {
        // String fileContent = fileReader.nextLine();
        // System.out.println(fileContent);
        // }
        // } catch (Exception e) {
        // System.out.println("Error: "+e.getMessage());}

        // ---------------------write content in File-----------------
        // String content = "on git bash:\r\n" + //
        // "what will happen if type \"git add
        // using-constructor-&-class-also-working-between-2-files/*\" command?\r\n"
        // + //
        // "which contains files inside it";
        // try {
        // FileWriter fileTOWriter = new FileWriter("myFirstFile.txt");
        // fileTOWriter.write(content);
        // fileTOWriter.close();
        // System.out.println("File content wrote successfuly");
        // } catch (Exception e) {
        // System.out.println("Error occured");
        // }

        // ---------------------write content in File-----------------
        // try {
        //     File file = new File("myFirstFile.txt");
        //     file.delete();
        //     System.out.println("File deleted successfuly");
            
        // } catch (Exception e) {
        //     System.out.println("Error occured");
        // }
    }
}
