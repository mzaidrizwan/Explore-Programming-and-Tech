public class Main {

    public static class Car {
        String model;
        String color;
        int mileAge;

        public String carQualityChecker() {
            if (mileAge <= 1000) {
                return "Good";
            } else {
                return "Poor";
            }
        }
    }

    public static void main(String[] args) {
        Car mercedez = new Car();
        mercedez.model = "Latest";
        //  mercedez.carQualityChecker();
        mercedez.color = "White";
        mercedez.mileAge = 1500;
        // ==========================================================
        Car rollsRoyceCar = new Car();
        rollsRoyceCar.model = "Latest";
        rollsRoyceCar.color = "White";
        rollsRoyceCar.mileAge = 100;
        
        System.out.println( "rollsRoyceCar"+ rollsRoyceCar.carQualityChecker());
        System.out.println("mercedez" + mercedez.carQualityChecker());
    }
}
