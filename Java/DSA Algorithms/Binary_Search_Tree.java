import java.util.ArrayList;
import java.util.Scanner;

class data_manager {
    int index;
    int value;
    int head_node;
    int left_node;
    int right_node;

    data_manager(int index, int value, int head_node, int left_node, int right_node) {
        this.index = index;
        this.value = value;
        this.head_node = head_node;
        this.left_node = left_node;
        this.right_node = right_node;
    }

    public String toString() {
        return "Index: " + index + " Value: " + value + " HeadNode: " + head_node + " LeftNode: " + left_node
                + " RightNode: " + right_node;
    }
}

public class Binary_Search_Tree {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<data_manager> data_container = new ArrayList<>();
        int index = 0, head_node = -3, left_node = -3, right_node = -3;

        while (true) {
            System.out.print("Enter to Add New Data: ");
            String input = scanner.nextLine();

            if (input.equalsIgnoreCase("off")) {
                break;
            }
            
            int value = Integer.parseInt(input);
            int focused_index_of_saved_data = 0;
         
            if (data_container.isEmpty()) {
                data_container.add(new data_manager(index++, value, -2, -1, -1));
            }
         
         
            while (true) {
                
                data_manager saved_data = data_container.get(focused_index_of_saved_data++);

                if (value > saved_data.value && saved_data.right_node < 0) {
                    saved_data.right_node = index;
                    break;
                }else if (value < saved_data.value && saved_data.left_node < 0) {
                    saved_data.left_node = index;
                    break;
                }

            }

            data_container.add(new data_manager(index++, value, head_node, left_node,
                    right_node));

            System.out.println("Value "+value+" is saved successfuly with Index "+(index-1));
        }

        // list.add(new data_manager(0, "value1", 1));
        // list.add(new data_manager(1, "value2", 2));

        // data_manager takeToEdit = list.get(1);
        // takeToEdit.index = 3;
        // takeToEdit.value = "new value";
        // System.out.println("Modified Data:");
        // for (data_manager i : list) {
        // System.out.println(i);
        // The operator > is undefined for the argument type(s) String, int
        // }
        scanner.close();
    }

}