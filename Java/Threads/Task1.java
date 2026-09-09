// (comment out other code sections to execute each)

// ---------------------------task-1 , complete the skeleton---------------------------

import org.w3c.dom.css.Counter;

public class Task1 {
    static final int N = 4;

    static class Worker implements Runnable {
        private final int id;

        Worker(int id) {
            this.id = id;
        }

        @Override
        public void run() {
            Thread me = Thread.currentThread();
            System.out.printf("task %d  name=%s  id=%d  virtual=%b%n",
                    id, me.getName(), me.threadId(), me.isVirtual());
        }
    }

    public static void main(String[] args) throws Exception {
        Thread[] t = new Thread[N];
        for (int i = 0; i < N; i++)
            t[i] = new Thread(new Worker(i), "worker-" + i);

        for (int i = 0; i < N; i++) {
            t[i].start();
        }

        for (int i = 0; i < N; i++) {
            t[i].join();
        }

        System.out.println("all joined");
    }
}

// -------------------replace ".start" with ".run"--------------

public class Task1 {
    static final int N = 4;

    static class Worker implements Runnable {
        private final int id;

        Worker(int id) {
            this.id = id;
        }

        @Override
        public void run() {
            Thread me = Thread.currentThread();
            System.out.printf("task %d  name=%s  id=%d  virtual=%b%n",
                    id, me.getName(), me.threadId(), me.isVirtual());
        }
    }

    public static void main(String[] args) throws Exception {
        Thread[] t = new Thread[N];
        for (int i = 0; i < N; i++)
            t[i] = new Thread(new Worker(i), "worker-" + i);

        for (int i = 0; i < N; i++) {
            t[i].run();
        }

        for (int i = 0; i < N; i++) {
            t[i].join();
        }

        System.out.println("all joined");
    }
}

// Change Worker to hold a Counter object with a mutable int value..............

public class Task1 {
    static final int N = 4;

    static class Counter {
        int value = 0;
    }

    static class Worker implements Runnable {
        private final Counter counter;

        Worker(Counter counter) {
            this.counter = counter;
        }

        @Override
        public void run() {
            Thread me = Thread.currentThread();
            System.out.printf("task %d  name=%s  id=%d  virtual=%b%n",
                    counter.value, me.getName(), me.threadId(), me.isVirtual());
        }
    }

    public static void main(String[] args) throws Exception {
        Thread[] t = new Thread[N];
        Counter c=new Counter();
        for (int i = 0; i < N; i++){
            t[i] = new Thread(new Worker(c), "worker-" + i);
            c.value++;
        }

        for (int i = 0; i < N; i++) {
            t[i].start();
        }

        for (int i = 0; i < N; i++) {
            t[i].join();
        }

        System.out.println("all joined");
    }
}
