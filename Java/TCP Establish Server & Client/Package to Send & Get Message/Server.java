import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

public class Server {

    Scanner scanner = new Scanner(System.in);
    int port = 9090;;
    ServerSocket serverSocket;
    Socket clientSocket;
    InputStreamReader inputStream;
    BufferedReader bufferedReader;
    PrintWriter out;

    public Server() throws IOException {

        serverSocket = new ServerSocket(port);
        System.out.println("Server power ON");
        clientSocket = serverSocket.accept();
        inputStream = new InputStreamReader(clientSocket.getInputStream());
        bufferedReader = new BufferedReader(inputStream);
        out = new PrintWriter(clientSocket.getOutputStream(), true);

    }

    public void recieve() throws IOException {

        String recieveMessage = bufferedReader.readLine();

        System.out.println("Friend " + recieveMessage);
    }

    public void send() {
        System.out.println("You ");
        String keyboard = scanner.nextLine();
        out.println(keyboard);
    }

    public static void main(String[] args) {
Server();
    }
}