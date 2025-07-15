
public class BookInfo {

    public String bookTitle;
    public String auther = "CR";
    public String publisher;
    public String password ="12a";
    private static int numberOfBooks = 0;

    public BookInfo() {
        numberOfBooks += 1;
    }

    int GetNumberOfBookObjects(){
        return numberOfBooks;
    }

// boolean Save(){}
}
