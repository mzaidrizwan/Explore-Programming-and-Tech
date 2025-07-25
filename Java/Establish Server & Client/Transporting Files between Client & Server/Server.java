// import java.io.DataInputStream;
// import java.io.DataOutputStream;
// import java.io.FileOutputStream;
// import java.net.ServerSocket;
// import java.net.Socket;

// public class Server {

//     private static DataOutputStream dataOutputStream = null;
//     private static DataInputStream dataInputStream = null;

//     public static void main(String[] args) {
//         try {
//             ServerSocket serverSocket = new ServerSocket(9090);
//             System.out.println("Server is on with port 9090");

//             Socket cliSocket = serverSocket.accept();
//             System.out.println("Client connected");

//             dataInputStream = new DataInputStream(cliSocket.getInputStream());
//             dataOutputStream = new DataOutputStream(cliSocket.getOutputStream());

//             receiveFile("2DarrROTATOR.cpp");

//         } catch (Exception e) {

//             System.out.println("Error " + e);
//         }
//     }

//     private static void receiveFile(String fileName) throws Exception {
//         int bytes = 0;

//         FileOutputStream fileOutputStream = new FileOutputStream(fileName);

//         long size = dataInputStream.readLong();

//         byte[] buffer = new byte[4 * 1024];

//         while (size > 0 && (bytes = dataInputStream.read(buffer, 0, (int) Math.min(buffer.length, size))) != -1) {
//             fileOutputStream.write(buffer, 0, bytes);
//             size -= bytes;
//         }
//         System.out.println("File Recieved Succesfuly");
//         fileOutputStream.close();
//     }
// }

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.FileOutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {

private static DataOutputStream dataOutputStream = null;
private static DataInputStream dataInputStream = null;

public static void main(String[] args) {
// Here we define Server Socket running on port 900
try (ServerSocket serverSocket = new ServerSocket(900)) {
System.out.println("Server is Starting in Port 900");
// Accept the Client request using accept method
Socket clientSocket = serverSocket.accept();
System.out.println("Connected");
dataInputStream = new DataInputStream(clientSocket.getInputStream());

dataOutputStream = new DataOutputStream(clientSocket.getOutputStream());
// Here we call receiveFile define new for that file
receiveFile("2DarrROTATOR.cpp");

dataInputStream.close();
dataOutputStream.close();
clientSocket.close();
} catch (Exception e) {
e.printStackTrace();
}
}

// receive file function is start here
private static void receiveFile(String fileName)
throws Exception {
int bytes = 0;
FileOutputStream fileOutputStream = new FileOutputStream(fileName);

long size = dataInputStream.readLong(); // read file size
byte[] buffer = new byte[4 * 1024];
while (size > 0 && (bytes = dataInputStream.read(buffer, 0,(int)
Math.min(buffer.length,size))) != -1) {
// Here we write the file using write method
fileOutputStream.write(buffer, 0, bytes);
size -= bytes; // read upto file size
}
// Here we received file
System.out.println("File is Received");
fileOutputStream.close();
}
}