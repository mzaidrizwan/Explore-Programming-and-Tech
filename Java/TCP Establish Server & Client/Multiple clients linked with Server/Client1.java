import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.Scanner;

public class Client1 {
    private static final int serverPort = 2121;

    public static void main(String[] args) {
        try (
                Socket socket = new Socket("127.0.0.1", serverPort);
                BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
                Scanner scanner = new Scanner(System.in);) {
            System.out.println("Connected with Server");
            Thread recieveThread = new Thread(() -> {
                try {
                    String messageFromServer = "";
                    while ((messageFromServer = in.readLine()) != null)
                        System.out.println("Server: " + messageFromServer);

                } catch (Exception e) {
                    System.out.println("Error " + e);
                }
            });
            recieveThread.start();

            while (true) {
                System.out.print("You: ");
                String messageToSend = scanner.nextLine();
                out.println(messageToSend);
                if (messageToSend.equalsIgnoreCase("off")) {
                    System.out.println("Disconnecting...");
                    break;
                }
            }
            System.out.println("Disconnected from Server.");
        } catch (Exception e) {
            System.out.println("Error " + e);
        }
    }
}
// // Main loop to send messages to server
// while (true) {
// System.out.print("You: ");
// String message = scanner.nextLine();
// out.println(message);

// if (message.equalsIgnoreCase("off")) {
// System.out.println("Disconnecting...");
// break;
// }
// }
// } catch (Exception e) {
// System.out.println("Error: " + e.getMessage());
// }
// }
// }
