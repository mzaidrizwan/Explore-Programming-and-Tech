from datetime import datetime
# import numpy
# A lambda function that multiplies argument a with argument b and print the result:
# x = lambda a,b:a*b
# print(x(2,3))


# arrays
# arr = numpy.array(["a","b","c"])
# print(type(arr))
# print(len(arr))
# print(arr[2])


# list
# arr = ["a","b","c"]
# print(type(arr))

# ---------------------------------File operations-------------------
# 1) open File
# f= open('file.txt')

# 2) create file
# f= open('file.txt','x')

# 3) append content
# f= open('file.txt','a')
# f.write('a b c d e f g')
# f.write('appended again')
# f.close()

# 4) read file
# f= open('file.txt')
# print(f.read())

# 5) overwrite all the content with given text
# f=open('file.txt','w')
# f.write("now only this text present, deleted previous content")
# f.close()

# -----------------------------------------[exercises]-----------------------------------
# I. a Python program to square and cube every number in a given list of integers using Lambda.
# numbers= [1,2,3,4]
# square = list(map(lambda x: x**2,numbers))
# print(square)

# cube = list(map(lambda x: x**3, numbers))
# print(cube)



#a Python program to find if a given string starts with a given character using Lambda.
# x = lambda a,b : a.startswith(b)
# print(x("bbbce",'c'))




#  Python program to extract year, month, date and time using Lambda
now = datetime.now()

get_year = lambda x: x.year
get_month = lambda x: x.month
get_date = lambda x: x.day
get_time = lambda x: x.time()

print(get_year(now))
print(get_month(now))
print("Date:", get_date(now))
print("Time:", get_time(now))