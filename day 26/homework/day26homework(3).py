# Insert: The insert method in Python is used to insert an element into a list at a specified index.
# It takes two arguments: the index where you want to insert the element and the element itself.

my_list = [1, 2, 3, 4]
my_list.insert(2, 5)  # Insert 5 at index 2
print(my_list)  # Output: [1, 2, 5, 3, 4]


# Pop: The pop method removes and returns the element at the specified index from a list.
# If no index is provided, it removes and returns the last element.
# It modifies the original list. 

my_list = [1, 2, 3, 4]
popped_element = my_list.pop(2)  # Remove and return element at index 2
print(popped_element)  # Output: 3
print(my_list)  # Output: [1, 2, 4]


# Len: The len function in Python returns the number of items in an object.
# For a list, it returns the number of elements in the list. Example:

my_list = [1, 2, 3, 4]
length = len(my_list)
print(length)  # Output: 4

# Append: The append method is used to add an element to the end of a list.
# It takes one argument which is the element to be added. 
# It modifies the original list. Example:

my_list = [1, 2, 3, 4]
my_list.append(5)  # Add 5 to the end of the list
print(my_list)  # Output: [1, 2, 3, 4, 5]
