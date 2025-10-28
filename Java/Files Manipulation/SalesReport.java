import java.util.Scanner;
import java.io.*;

public class SalesReport {
    public static void main(String[] args) {
        File file = new File("Sales_Report.txt");
        int total = 0;
        try {
            Scanner scanner = new Scanner(file);
            while (scanner.hasNextLine()) {
                String file_content = scanner.nextLine();
                System.out.println(file_content);

                String[] each_row = file_content.split("\t");

                // for (int i = 0; i < each_row.length; i++) {
                    
                    System.out.println(each_row[1]);
                // }
                // if (each_row[5].matches(".*[^0-9].*") && each_row[6].matches(".*[^0-9].*")) {
                //     continue;
                // }

                // int price = Integer.parseInt(each_row[5]);
                // int qty = Integer.parseInt(each_row[6]);

                // System.out.println("PRICE: " + price);
                // System.out.println("QTY: " + qty);

                // total += price * qty;
                // System.out.println();
            }
            System.out.println("Total: " + total);
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}

// Total sales amount
// Employee wise sales total
// product wise sales amount
// region wise sales amount
// month wise sales amount
// Challenge question
// Auto-generation of menu options based on headerline of the tab delimited
// structured text file with column heading in the first row.