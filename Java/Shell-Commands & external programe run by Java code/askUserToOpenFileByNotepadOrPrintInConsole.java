// import java.io.IOException;
import java.util.Scanner;
import java.io.File;

public class askUserToOpenFileByNotepadOrPrintInConsole {
    public static void main(String[] args) {
        System.out.print("\nEnter Path of File(e.g C:\\Users\\file.txt): ");
        Scanner scan = new Scanner(System.in);
        String inp = scan.nextLine();
        System.out.println("1.Open File in Notepad\n2.Print File Content here");
        int howToOpenFile = scan.nextInt();
        scan.close();
        while (true) {
            System.out.println("recieved: " + howToOpenFile);
            if (howToOpenFile == 1) {
                openInNotepad(inp);
                break;
            } else if (howToOpenFile == 2) {
                printInConsole(inp);
                break;
            } else {
                System.out.println("Wrong Input,Please type either 1 or 2");
            }
        }

    }

    static void openInNotepad(String path) {
        try {
            ProcessBuilder task = new ProcessBuilder("cmd", "/K", "notepad " + path);
            Process start = task.start();
            // start.waitFor();

        } catch (Exception e) {
            System.out.println("Error Occured " + e);
        }
    }

    static void printInConsole(String path) {
        try {
            File pickFile = new File(path);
            Scanner readFile = new Scanner(pickFile);
            System.out.println(" ");
            while (readFile.hasNextLine()) {
                String content = readFile.nextLine();
                System.out.println(content);
            }
            readFile.close();

        } catch (Exception e) {
            System.out.println("error occured while printing the File contnt: " + e);
        }
    }

}