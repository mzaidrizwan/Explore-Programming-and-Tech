==============================[task-1]==========================

---------complete the skeleton---------
output:
task 1  name=worker-1  id=27  virtual=false
task 3  name=worker-3  id=29  virtual=false
task 2  name=worker-2  id=28  virtual=false
task 0  name=worker-0  id=26  virtual=false
all joined

id's are not sequential, different Threads running in same time.


-------------------replace ".start" with ".run"--------------
task 0  name=main  id=3  virtual=false
task 1  name=main  id=3  virtual=false
task 2  name=main  id=3  virtual=false
task 3  name=main  id=3  virtual=false

id's are same, can say that Threads are'nt parallel.


------------- Change Worker to hold a Counter object with a mutable int value...------------
task 4  name=worker-0  id=26  virtual=false
task 4  name=worker-2  id=28  virtual=false
task 4  name=worker-1  id=27  virtual=false
task 4  name=worker-3  id=29  virtual=false

started from 0, name=worker-0, as c.value++ the name=worker-1,2,...,n. After giving name to last thread it became c.value=4 which is reflected at repeated "task 4" in each row.






==============================[task-2]==========================
OUTPUT :-
Worker 2 finished: local = 2000000
Worker 1 finished: local = 2000000
Worker 0 finished: local = 2000000
Worker 3 finished: local = 2000000
Expected shared = 8000000 Actual shared = 5082147

OBSERVATIONS:-
1) 'local' variable created inside 'Worker' class, each 'local' variable is private to it's Thread in Multi Threaded operation. No other thread can change 'local' variable.
2) 'shared' variable was open to all the program i.e all the Threads, every Thread can change 'shared' variable, as 'shared++' is actually 3 statements (READ, UPDATE, WRITE) because of more then one Thread can possibly read same data of 'shared' variable & write the same updated value, this leads to decrease of productive operation, resulting the final value less than expected value.



==============================[task-3]==========================
OUTPUT:-
4 tasks created
threads: 4

expected sum result: 1.0E7

actual sum result: 1.0E7

time taken: 45.0014

OBSERVATIONS:-
1) each thread got a task to sum up given numbers, all threads didn't share memory & worked independently, work of each thread was private, resulted sum is equal to expected sum means no race condition.