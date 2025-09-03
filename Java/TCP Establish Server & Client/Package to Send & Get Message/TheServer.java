import java.net.ServerSocket;
import java.net.Socket;

public class TheServer {
    private int port;
    private ServerSocket serverSocket;

    public void TheServer(int port) {
        this.port = port;
    }

    public void start() {
        try {
            serverSocket = new ServerSocket(port);
            System.out.println("Status : ON");
            Socket socket = serverSocket.accept();
            System.out.println("Client is Connected.");

            ClientHandler clientHandler = new ClientHandler(socket);

        } catch (Exception e) {
            System.out.println("Error While Starting: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        TheServer server = new TheServer();
    }
}
