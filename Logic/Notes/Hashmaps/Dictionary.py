d: dict = {'Name': 'Ram', 'Age': '19', 'Country': 'India'}

# # keys
# print(d.keys())

# #values
# print(len(d.values()))

# #items
# print(d.items())

# print(dict.keys(Ram))
###################################################
# clear()	Removes all the elements from the dictionary
# copy()	Returns a copy of the dictionary
# fromkeys()	Returns a dictionary with the specified keys and value
# get()	Returns the value of the specified key
# items()	Returns a list containing a tuple for each key value pair
# keys()	Returns a list containing the dictionary's keys
# pop()	Removes the element with the specified key
# popitem()	Removes the last inserted key-value pair
# setdefault()	Returns the value of the specified key. If the key does not exist: insert the key, with the specified value
# update()	Updates the dictionary with the specified key-value pairs
# values()	Returns a list of all the values in the dictionary
###############################################
set()
#Does not allow duplicates in a list
############################
from collections import defaultdict, Counter
#Check how many instances in a list
# For example:
s = "jar"
d1 = defaultdict(list)
d1 = Counter(s)
Counter({'j': 1, 'a': 1, 'r': 1})