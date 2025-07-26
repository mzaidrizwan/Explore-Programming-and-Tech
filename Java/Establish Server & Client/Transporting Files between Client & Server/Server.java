import java.io.DataInputStream;
// import java.io.DataOutputStream;
import java.io.FileOutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {

    // private static DataOutputStream dataOutputStream = null;
    private static DataInputStream dataInputStream = null;

    public static void main(String[] args) {
        try {
            ServerSocket serverSocket = new ServerSocket(9090);
            System.out.println("Server is on with port 9090");

            Socket cliSocket = serverSocket.accept();
            System.out.println("Client connected");

            dataInputStream = new DataInputStream(cliSocket.getInputStream());
            // dataOutputStream = new DataOutputStream(cliSocket.getOutputStream());

            receiveFile("2DarrROTATOR.cpp");

        } catch (Exception e) {

            System.out.println("Error " + e);
        }
    }

    private static void receiveFile(String fileName) throws Exception {
        int bytes = 0;

        FileOutputStream fileOutputStream = new FileOutputStream(fileName);

        long size = dataInputStream.readLong();

        byte[] buffer = new byte[4 * 1024];

        while (size > 0 && (bytes = dataInputStream.read(buffer, 0, (int) Math.min(buffer.length, size))) != -1) {
            fileOutputStream.write(buffer, 0, bytes);
            size -= bytes;
        }
        System.out.println("File Recieved Succesfuly");
        fileOutputStream.close();
    }
}
