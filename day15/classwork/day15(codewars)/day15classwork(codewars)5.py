# def find_min_max(numbers):
#     if not numbers:
#         print("The list is empty.")
#         return

#     min_num = numbers[0]
#     max_num = numbers[0]

#     for num in numbers:
#         if num < min_num:
#             min_num = num
#         elif num > max_num:
#             max_num = num

#     print("Minimum number:", min_num)
#     print("Maximum number:", max_num)
    
# my_list = [5, 3, 9, 1, 7]
# find_min_max(my_list)

def find_min_max(numbers):

    min_num = numbers[0]
    max_num = numbers[0]

    for num in numbers:
        if num < min_num:
            min_num = num
        if num > max_num:
            max_num = num

    print("Minimum number:", min_num)
    print("Maximum number:", max_num)

# Example usage:
my_list = [7, 2, 9, 1, 5]
find_min_max(my_list)

