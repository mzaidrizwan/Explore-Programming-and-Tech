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
        add_New_data();
    }

    static ArrayList<data_manager> data_container;

    static void add_New_data() {
        Scanner scanner = new Scanner(System.in);
        data_container = new ArrayList<>();
        int index = 0, head_node = -2, left_node = -1, right_node = -1;

        while (true) {
            System.out.print("Enter Numbers to Add in Binary-Tree,enter OFF to end Data Entry: ");
            String input = scanner.nextLine();

            if (input.equalsIgnoreCase("off")) {
                print_leaf();
                break;
            }

            int value = Integer.parseInt(input);
            int focused_index_of_saved_data = 0;

            if (data_container.isEmpty()) {
                data_container.add(new data_manager(index++, value, head_node, left_node, right_node));
                System.out.println("Saved successfuly" + '\n' + "Value " + value + '\n' + " Index  " + (index - 1)
                        + '\n'
                        + " Head Node: " + head_node + '\n' + " Left Node: " + left_node + '\n' + " Right Node: "
                        + right_node);
                continue;
            }

            while (true) {

                data_manager saved_data = data_container.get(focused_index_of_saved_data);

                if (value > saved_data.value && saved_data.right_node < 0) {
                    saved_data.right_node = index;
                    head_node = focused_index_of_saved_data;
                    break;
                } else if (value < saved_data.value && saved_data.left_node < 0) {
                    saved_data.left_node = index;
                    head_node = focused_index_of_saved_data;
                    break;
                } else if (value < saved_data.value && saved_data.left_node >= 0) {
                    focused_index_of_saved_data = saved_data.left_node;
                } else if (value > saved_data.value && saved_data.right_node >= 0) {
                    focused_index_of_saved_data = saved_data.right_node;
                }

            }

            data_container.add(new data_manager(index++, value, head_node, left_node,
                    right_node));
            System.out.println("Saved successfuly" + '\n' + "Value " + value + '\n' + " Index  " + (index - 1) + '\n'
                    + " Head Node: " + head_node + '\n' + " Left Node: " + left_node + '\n' + " Right Node: "
                    + right_node);
        }
        scanner.close();
    }

    static void print_leaf() {
        boolean found = false;
        System.out.println("All Leaf Nodes in Given Data:");
        for (int i = 0; i < data_container.size(); i++) {
            data_manager saved_data = data_container.get(i);
            if (saved_data.left_node == -1 && saved_data.right_node == -1) {
                System.out.println(saved_data.value);
                found = true;
            }
        }

        if (!found) {
            System.out.println("No Leaf Node Found.");
        }
        search_value_and_tell_its_position();
    }

    static void search_value_and_tell_its_position() {
        System.out.print("Please Enter the Value You want to search in Binary-Tree: ");
        Scanner scanner = new Scanner(System.in);
        int value_to_search_in_tree = scanner.nextInt();
        boolean found = false;

        for (int i = 0; i < data_container.size(); i++) {
            data_manager saved_data = data_container.get(i);
            if (saved_data.value == value_to_search_in_tree) {
                System.out.println("Value " + value_to_search_in_tree + "is Found with Index " + saved_data.index);
                found = true;
            }
        }
        if (!found) {
            System.out.println("Value Not Found.");
        }
        search_value_and_tell_its_headNode_ChildNode();
    }

    static void search_value_and_tell_its_headNode_ChildNode() {
        System.out.print("Please Enter the Value to Find its Parent & Child Nodes: ");
        Scanner scanner = new Scanner(System.in);
        int value_to_search_in_tree = scanner.nextInt();
        boolean found = false;

        for (int i = 0; i < data_container.size(); i++) {
            data_manager saved_data = data_container.get(i);
            if (saved_data.value == value_to_search_in_tree) {
                System.out.println("Value " + value_to_search_in_tree + "is Found with Parent Node "
                        + saved_data.head_node + " and Left Child Node " + saved_data.left_node
                        + " and Right Child Node " + saved_data.right_node);
                found = true;
            }
        }
        if (!found) {
            System.out.println("Value Not Found.");
        }
        print_inOrderTraversal();
    }

    static void print_inOrderTraversal() {

    }
}