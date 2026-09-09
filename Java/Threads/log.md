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