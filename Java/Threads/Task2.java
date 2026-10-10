public class Task2 {
    static long shared = 0;
    static int N = 4;
    static int iteration = 20_00_000;

    static class Worker implements Runnable {
        long local = 0;
        final int id;

        Worker(int id) {
            this.id = id;
        }

        @Override
        public void run() {

            for (int i = 0; i < iteration; i++) {
                local++;shared++;
            }

            System.out.printf("Worker %d finished: local = %d%n", id, local);

        }
    }

    public static void main(String[] args) throws Exception {

        Thread[] t = new Thread[N];
        for (int i = 0; i < N; i++) {
            t[i] = new Thread(new Worker(i), "worker " + i);

        }

        for (int i = 0; i < t.length; i++) {
            t[i].start();
        }
        for (int i = 0; i < t.length; i++) {
            t[i].join();
        }

        System.out.printf("Expected shared = " + N * iteration + " Actual shared = " + shared
                + "\n\n ");

    }
}