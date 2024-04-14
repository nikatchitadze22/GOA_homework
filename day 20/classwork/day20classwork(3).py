int_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for i in int_list[:]:
    if i % 2 != 0:
        ind = int_list.index(i)
        int_list.pop(ind)

print(int_list)