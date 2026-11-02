import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Task4 {
    static class Sleeper implements Runnable {

        @Override 
        public void run(){
            try {
                Thread.sleep(1000);
            } catch (Exception e) {
            System.out.println(e);
            }
        }
    
        
    }

    public static void main(String[] args) throws Exception{
        String mode = (args.length>0)?args[0]:"virtul";
        int count = (args.length>1)?Integer.parseInt(args[1]):10000;

         ExecutorService exec;
        if (mode.equals("platform")) {
            exec=Executors.newThreadPerTaskExecutor(Thread.ofPlatform().factory());
        }else
            exec = Executors.newVirtualThreadPerTaskExecutor();
        
        System.out.printf("running %d tasks using %s threads...%n",count,mode);

        long start=System.nanoTime();//start timing

        // submit all tasks
        try(exec){
            for (int i = 0; i < count; i++) {
                exec.submit(new Sleeper());
            }
        }

        long end = System.nanoTime();
        double elapsedSec = (end-start) / 1_000_000_000.0;

        System.out.printf("finished %d tasks in %.2f seconds.%n",count,elapsedSec);

    }
}
