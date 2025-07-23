import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.Scanner;

public class Client {
    public static void main(String[] args) {
        try {
            Scanner scanner = new Scanner(System.in);
            Socket socket = new Socket("localhost", 9090);
            System.out.println("Status : ON");
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
            InputStreamReader inputStream = new InputStreamReader(socket.getInputStream());
            BufferedReader bufferedReader = new BufferedReader(inputStream);

            while (true) {
                String takeInputFromKeyboard;
                
                System.out.print("You: ");
                takeInputFromKeyboard = scanner.nextLine();
                out.println(takeInputFromKeyboard);

                if (takeInputFromKeyboard.trim().equals("off")) {
                    System.out.println("SHUTDOWN COMMAND RECIVED");
                    break;
                }
                
                String inputFromServer = bufferedReader.readLine();
                System.out.println("Friend: " + inputFromServer);
            }

            socket.close();
            scanner.close();
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
    }

}



                     // while (true) {
//                 String takeInputFromKeyboard;

//                 while (true) {
//                     System.out.print("You: ");
//                     takeInputFromKeyboard = scanner.nextLine();
//                     out.println(takeInputFromKeyboard);
//                     if (true) {
//                         break;
//                     }
//                     if (takeInputFromKeyboard.trim().equals("off")) {
//                         System.out.println("SHUTDOWN COMMAND RECIVED");
                        
//                         break;
//                     }
//                 }

//                 String inputFromServer = bufferedReader.readLine();
//                 System.out.println("Friend: " + inputFromServer);
//             }