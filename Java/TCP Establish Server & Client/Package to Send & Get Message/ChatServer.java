import java.io.*;
import java.net.*;
import java.util.Scanner;

// Class responsible for handling a connected client
class ClientHandler {
    private Socket clientSocket;
    private BufferedReader reader;
    private PrintWriter writer;
    private Scanner scanner;

    public ClientHandler(Socket socket) throws IOException {
        this.clientSocket = socket;
        this.reader = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
        this.writer = new PrintWriter(clientSocket.getOutputStream(), true);
        this.scanner = new Scanner(System.in);
    }

    // Method to receive message from client
    public void receiveMessage() throws IOException {
        String message = reader.readLine();
        if (message != null) {
            System.out.println("Friend: " + message);
        }
    }

    // Method to send message to client
    public void sendMessage() {
        System.out.print("You: ");
        String message = scanner.nextLine();
        writer.println(message);
    }

    // Close connection
    public void close() throws IOException {
        reader.close();
        writer.close();
        clientSocket.close();
    }
}

// Main server class
public class ChatServer {
    private int port;
    private ServerSocket serverSocket;

    public ChatServer(int port) {
        this.port = port;
    }

    // Start the server
    public void start() {
        try {
            serverSocket = new ServerSocket(port);
            System.out.println("Server started. Waiting for client...");
            Socket clientSocket = serverSocket.accept();
            System.out.println("Client connected!");

            ClientHandler handler = new ClientHandler(clientSocket);

            // Simple chat loop
            while (true) {
                handler.receiveMessage();
                handler.sendMessage();
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // Main method
    public static void main(String[] args) {
        ChatServer server = new ChatServer(9090);
        server.start();
    }
}
