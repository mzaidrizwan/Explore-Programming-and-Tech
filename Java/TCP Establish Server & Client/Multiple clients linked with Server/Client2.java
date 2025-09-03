import java.net.*;
import java.io.*;
import java.util.Scanner;

public class Client2 {
    private static final String SERVER_ADDRESS = ""; // Localhost
    private static final int SERVER_PORT = 2121;

    public static void main(String[] args) {
        try (
            Socket socket = new Socket(SERVER_ADDRESS, SERVER_PORT);
            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
            Scanner scanner = new Scanner(System.in)
        ) {
            System.out.println("Connected to server on port " + SERVER_PORT);

            // Thread to continuously read messages from server
            Thread receiveThread = new Thread(() -> {
                try {
                    String serverMessage;
                    while ((serverMessage = in.readLine()) != null) {
                        System.out.println("Server: " + serverMessage);
                    }
                } catch (IOException e) {
                    System.out.println("Disconnected from server.");
                }
            });
            receiveThread.start();

            // Main loop to send messages to server
            while (true) {
                System.out.print("You: ");
                String message = scanner.nextLine();
                out.println(message);

                if (message.equalsIgnoreCase("off")) {
                    System.out.println("Disconnecting...");
                    break;
                }
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
