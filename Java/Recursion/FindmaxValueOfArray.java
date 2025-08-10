//Write a recursive algorithm that returns the maximum value of an unsorted array.
public class FindmaxValueOfArray {
    public static void main(String[] args) {
        int[] arr = { 3, 94, 2, 15, 6, 433, 546,23, 412, };
        int maximum_value = arr[0];
        int index = 1;
        maximum_value = lengthFind(arr, index, maximum_value);

        System.out.println("Mximum Value is "+maximum_value);
    }

   static int lengthFind(int[] arr, int index, int maximum_value) {

        if (index >= arr.length) {
            return maximum_value;
        }

        if (arr[index] > maximum_value) {
            maximum_value = arr[index];
        }

        return lengthFind(arr, ++index, maximum_value);
    }
}