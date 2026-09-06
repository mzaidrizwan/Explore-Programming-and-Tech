# Lists==========================
# x=["a","b"]
# y=["c","d"]
# z= x+y
# ListOfList = [x,y,z]
# print(ListOfList[1][1])

# Tuples (immutable)
# t = (1, 2, 3)
# print(t)

# Sets (for Mathemtical set operations)==========================
# set1 = {2,3}
# set1.add(8)
# print(9 in set1)

# set2 = {2,5}

# difference= set2-set1
# print(difference)

# intersection = set1 & set2
# print(intersection)

# union = set1|set2
# print(union)

#Dictionaries==========================
# dictionary_2 = {'1':'pk'}
# dictionary = {'name':'bcd','age':34,'height':181.3}
# del dictionary['height']
# dictionary['age'] = 35
# print(dictionary.keys())
# print(dictionary.values())
# print(dictionary.items())

#for loop==========================
# fruits = ['aple','bnna','grps']
# for x in fruits: print(x)

# fruitPrices = {'apples': 2.00, 'oranges': 1.50, 'pears': 1.75}
# for fruit, price in fruitPrices.items():
#     if price<2.00:print("%s costs %f " % (fruit, price))
#     else: print(fruit+" is expensive")



# Exercise Python input /output Basic operations----------------------------------------
# a = int(input("Enter a: "))
# b = int(input("Enter b: "))
# c= int(input("enter c: "))
# d= int(input("enter d: "))

# a,b,c,d = d,c,b,a
# print('{a} + {b} + {c} + {d}')


# def celcius_to_fahrenheit(celcius): return (celcius * 9/5) + 32
# def fahrenheit_to_celcius(fahrenheit): return (fahrenheit - 32) * 5/9
# user_input = float(input("enter temperature, C or F: "))

# print("converted to fahrenheit"+str(celcius_to_fahrenheit(user_input)))
# print("converted to celcius"+str(fahrenheit_to_celcius(user_input)))




# Exercise: Lists----------------------------------------
lst=[3,2,4,5.6,5.5]
lst.append(6)
# print(lst)

# print(lst.count(2))

lst.extend([9,0,2])

# print(lst)

lst.insert(2,1)
# print(lst)

lst.remove(0)

lst.pop()
# print(lst)

# print(lst.index(3))

lst_reveresed=lst
lst_reveresed.reverse()
# print(lst_reveresed)

lst.clear()
# print(lst)

# lst=['abc', 'xyz', 'aba', '1221']
# count = 0
# for item in lst:
#     if len(item) ==2 or item[0] == item[len(item)-1]:
#         count+=1
# print(count)



# Exercise: Dictionaries----------------------------------------
# dic1={1:10, 2:20} 
# dic2={3:30, 4:40} 
# dic3={5:50,6:60}

# merged_dict={}
# merged_dict.update(dic1)
# merged_dict.update(dic2)
# merged_dict.update(dic3)
# print(merged_dict)

# students = {
#     "Ali": {"age": 20, "marks": (85, 90)},
#     "Sara": {"age": 22, "marks": (78, 88)}
# }

# print(students["Ali"]["marks"][0])


# Exercise: List Comprehensions----------------------------------------
# words = ['Red', 'Green', 'White', 'Black', 'Pink', 'Yellow','Teapink'] 

# for word in words:
#     if len(word)>5:
#         print(word.lower())
#     else:print(word)

# index = -1
# for word in words:
#     index+=1
#     if (index == 0) or (index == 4) or (index == 5):
#         print('')
#     else: print(word)




# Exercise : Operators----------------------------------------
# x = 6 
# if (type(x) is int):  
#     print ("true")  
# else:  
#     print ("false")

# x=7.2
# if (type(x) is not int):
#     print('not int')
# else:
#     print('is int')



# list1=[1,2,3,4,5]  
# list2=[6,7,8,9] 
# for item in list1:  
#     if item in list2:  
#         print("overlapping")      
# else:  
#     print("not overlapping") 



# a= 81
# a//=3
# print("floor divide=",a) 
# a**=5 
# print("exponent=",a) 



# a = 60      
# b = 13 
# c = 0            
 
# c = a & b       
# print("Line 1", c ) 
 
# c = a | b       
# print("Line 2 ", c ) 
 
# c = a ^ b       
# print("Line 3 ", c ) 
 
# c = ~a         
# print("Line 4", c ) 
 
# c = a << 2    
# print("Line 5 ", c ) 
 
# c = a >> 2     
# print("Line 6 ", c ) 


# Create a Python Program that perform following tasks for any problem of your choice: that must 
# include

# student_name = "Ali"
# student_age = 20
# marks_math = 85
# marks_science = 90
# print("Variables print:", student_name, student_age, marks_math, marks_science)

# average = (marks_math + marks_science) / 2
# print("Average number:", average)

# students={
#     'std_1' : {'age':22,'number':(87,99)},
#     'std_2': {'age':21,'number':(23,98)}
# }
# print(students)

# for std in students:
#     avg = (students[std]['number'][0] +students[std]['number'][1]) / 2
#     print(f"Average of {std}: {avg}")
#     if avg >= 75:
#         print("Excellent")
#     else: 
#         print("Good")


# student_list = ["Ali", "Sara", "Bilal"]
# student_tuple = ("Math", "Science", "English")
# print(f"List Example: {student_list}")
# print(f"Tuple Example:{student_tuple} ")
allStudents=[]
while 1:
    std ={'name':"",'age':''}
    inp_nam= input("enter name, type 1 to stop: ")
   
    if inp_nam =='1':
        break

    inp_age=int(input("age: "))
    std["name"]= inp_nam
    std["age"]=inp_age
    print(f" student {std['name']} of age {std['age']} admitted\n")
    allStudents.append(std)
    print(f"available students {allStudents}")