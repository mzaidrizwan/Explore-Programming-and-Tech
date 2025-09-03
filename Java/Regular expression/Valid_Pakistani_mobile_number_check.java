import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Valid_Pakistani_mobile_number_check {
    public static void main(String[] args) {
      
        String data = "ert 03001234567 hjgj 03001234567 , Joined: 2022-03-15;User2: ali.khan @domain.pk,Phone:03451234567,Joined:2021-11-02;User3:test_user @fake.net,Phone:03111234567,Joined:2023-01-09;Invalid:03 A01234567,Email:not-an-email,Date:2022-99-99;User4:sara @web.org,Phone:03331234567,Joined:2020-07-30;Extra:+923001234567,+923451234567,12345678901,03-001234567";

        Filter_number filter_number = new Filter_number();
        filter_number.count_filtered(data);
    }
}

class Filter_number {
    private String format = "03[0-3]\\d{8}";

    void count_filtered(String input) {

    Pattern pattern = Pattern.compile(format);
    Matcher matcher = pattern.matcher(input);
    int count = 0;
    System.out.println("i am good");
    while (matcher.find()) {
        System.out.println(++count+") "+matcher.group());
    }
    //    System.out.println(matcher.find() ? "Found": "Not Exist");


    }

}
