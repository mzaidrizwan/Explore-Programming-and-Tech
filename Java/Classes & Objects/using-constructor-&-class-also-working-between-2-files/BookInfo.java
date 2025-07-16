
public class BookInfo {

    public String bookTitle;
    public String auther;
    public String publisher;
    private String password;
    private static int numberOfBooks = 0;

    public BookInfo(String auther_e, String bookTitle_e, String publisher_e) {

        auther = auther_e;
        bookTitle = bookTitle_e;
        publisher = publisher_e;

        numberOfBooks += 1;
    }

    int GetNumberOfBookObjects() {
        return numberOfBooks;
    }

}
