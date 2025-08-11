import java.io.*;
import java.net.Socket;

public class SMTPClient {
    public static void main(String[] args) {
        // Example free SMTP server (no authentication)
        String smtpServer = "smtp.freesmtpservers.com";
        int port = 25;

        // Example email addresses (replace with real, valid addresses)
        String senderEmail = "m79009995@gmail.com";
        String recipientEmail = "zytzyt191@gmail.com.com";
        String senderSMTP = "example-client"; // Identifier for HELO/EHLO

        try (Socket socket = new Socket(smtpServer, port);
             BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
             BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()))) {

            // 1. Server greeting
            System.out.println(reader.readLine());

            // 2. HELO
            sendCommand(writer, reader, "HELO " + senderSMTP);

            // 3. MAIL FROM
            sendCommand(writer, reader, "MAIL FROM:<" + senderEmail + ">");

            // 4. RCPT TO
            sendCommand(writer, reader, "RCPT TO:<" + recipientEmail + ">");

            // 5. DATA command
            sendCommand(writer, reader, "DATA");

            // 6. Email headers + body
            writer.write("Subject: Test Email from Java Raw SMTP\r\n");
            writer.write("From: " + senderEmail + "\r\n");
            writer.write("To: " + recipientEmail + "\r\n");
            writer.write("\r\n"); // Blank line before body
            writer.write("Hello Alice,\r\n");
            writer.write("This is a test email sent using raw SMTP commands from Java.\r\n");
            writer.write("Regards,\r\n");
            writer.write("John Doe\r\n");
            writer.write(".\r\n"); // End of message
            writer.flush();

            // 7. Server's final response for DATA
            System.out.println(reader.readLine());

            // 8. QUIT
            sendCommand(writer, reader, "QUIT");

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void sendCommand(BufferedWriter writer, BufferedReader reader, String command) throws IOException {
        writer.write(command + "\r\n");
        writer.flush();
        System.out.println("C: " + command);
        System.out.println("S: " + reader.readLine());
    }
} 