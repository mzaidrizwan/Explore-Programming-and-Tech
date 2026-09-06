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


def celcius_to_fahrenheit(celcius): return (celcius * 9/5) + 32
def fahrenheit_to_celcius(fahrenheit): return (fahrenheit - 32) * 5/9
user_input = float(input("enter temperature, C or F: "))

print("converted to fahrenheit"+str(celcius_to_fahrenheit(user_input)))
print("converted to celcius"+str(fahrenheit_to_celcius(user_input)))