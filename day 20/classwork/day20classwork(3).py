# int_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# for i in int_list[:]:
#     if i % 2 != 0:
#         ind = int_list.index(i)
#         int_list.pop(ind)

# print(int_list)



# #გადმოგეცემათ რიცხვების სია, თქვენ უნდა ამოშალოთ 
# ამ სიიდან ყველა კენტი რიცხვი და დატოვოთ 
# მხოლოდ ლუწი რიცხვები შემდეგ კი დაბეჭდოთ

my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
# # my_list.pop(2)
# print(my_list.pop(2))


for i in range(len(my_list)):
    # if my_list[i] % 2 != 0:
        # my_list.pop(i)
        # print(my_list[i])
        # print(i, "mate")
    my_list.pop(i)
print(my_list)