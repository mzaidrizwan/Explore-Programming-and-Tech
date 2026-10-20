import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;

class SliceSum implements Callable<Double> {
    private final double[] data;
    private final int lo, hi;

    SliceSum(double[] data, int lo, int hi) {
        this.data = data;
        this.lo = lo;
        this.hi = hi;
    }

    @Override
    public Double call() {
        double sum = 0;
        for (int i = lo; i < hi; i++) {
            sum += data[i];
        }
        return sum;
    }
}

public class Task3 {
    public static void main(String[] args) throws Exception{

        int N = 10_000_000, T = 4;
        double[] data = new double[N];

        for (int i = 0; i < N; i++) {
            data[i] = 1.0;
        }

        long start = System.nanoTime();
        
        int chunkSize = N / T;
        List<SliceSum> tasks = new ArrayList<>();

        for (int i = 0; i < T; i++) {
            int lo = i * chunkSize;// chunk starting point
            int hi = (i == T - 1) ? N : lo + chunkSize;// chunk ending point

            tasks.add(new SliceSum(data, lo, hi));
        }
        System.out.println(tasks.size() + " tasks created");
    
        ExecutorService pool = Executors.newFixedThreadPool(T);

        List<Future<Double>> futures=pool.invokeAll(tasks);

        // collect results & sum them
        double sum=0;
        for (Future<Double> future : futures) {
            sum+=future.get();
        }

        pool.shutdown();
        pool.awaitTermination(1,TimeUnit.MINUTES);

        long end=System.nanoTime();
        double elapsedMs=(end-start)/1_000_000.0;


        System.out.println("threads: "+T);
        System.out.println("\n expected sum result: "+(double) N);
        System.out.println("\n actual sum result: "+sum);
        System.out.println("\n time taken: "+elapsedMs);
    
    }
}