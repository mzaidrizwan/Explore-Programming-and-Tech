import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Server {

    private static final int port = 2121;
    private static final int max_clients = 3;
    private static List<ClientHandler> clients = new ArrayList<>();

    public static void main(String[] args) {
        receive_Connection();
    }

    static void receive_Connection() {
        try (ServerSocket serverSocket = new ServerSocket(port)) {
            System.out.println("Waiting to recieve connctions");
            int connectedClients = 0;
            while (connectedClients < max_clients) {
                Socket clientSocket = serverSocket.accept();
                System.out.println(++connectedClients + " Clints Connected");
                ClientHandler clientHandler = new ClientHandler(clientSocket, connectedClients);
                clients.add(clientHandler);
                new Thread(clientHandler).start();
            }
            System.out.println("Connections Limit approached,no more Connctions is acceptable.");
        } catch (Exception e) {
            System.out.println("Error " + e);
        }
    }

    static class ClientHandler implements Runnable {
        private int client_id;
        private Socket socket;
        private BufferedReader in;
        private PrintWriter out;

        public ClientHandler(Socket socket, int client_id) {
            this.socket = socket;
            this.client_id = client_id;
            try {
                InputStreamReader inputStream = new InputStreamReader(socket.getInputStream());
                in = new BufferedReader(inputStream);
                out = new PrintWriter(socket.getOutputStream(), true);
            } catch (Exception e) {
                System.out.println("Client " + client_id + " Error: " + e.getMessage());
            }
        }

        @Override
        public void run() {
            Scanner scanner = new Scanner(System.in);
            try {
                String message;
                while ((message = in.readLine()) != null) {
                    if (message.trim().equalsIgnoreCase("off")) {
                        System.out.println("Client " + client_id + " disconnected.");
                        break;
                    }
                    System.out.println("Client " + client_id + ": " + message);
                    System.out.print("You :");
                    String messageToSend = scanner.nextLine();
                    out.println(messageToSend);
                }
            } catch (IOException e) {
                System.out.println("Client " + client_id + " error: " + e.getMessage());
            } finally {
                try {
                    socket.close();
                } catch (Exception e) {
                    System.out.println("Error while closing socket: " + e.getMessage());

                }
            }
        }
    }
}
