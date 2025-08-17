import java.net.*;
import java.io.*;
import java.util.Scanner;

public class Server {
    public static void main(String[] args) {
        try {
            Scanner scanner = new Scanner(System.in);
            ServerSocket serverSocket = new ServerSocket(9090);
            System.out.println("Status : ON");
            Socket clientSocket = serverSocket.accept();
            InputStreamReader inputStreamReader = new InputStreamReader(clientSocket.getInputStream());
            BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
            PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);

            while (true) {
                String recieveMessage = bufferedReader.readLine();
                if (recieveMessage.trim().equalsIgnoreCase("off")) {
                    System.out.println("SHUTDOWN COMMAND RECIVED");
                    break;
                } else {
                    System.out.println("Friend: " + recieveMessage);
                }
                System.out.print("You: ");
                String takeInputFromKeyboard = scanner.nextLine();
                out.println(takeInputFromKeyboard);
            }

            scanner.close();
            clientSocket.close();
            serverSocket.close();
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
    }
}