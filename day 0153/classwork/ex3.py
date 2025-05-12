def remove_every_other(my_list):
    lst = []
    for i in range(len(my_list)):
        if i % 2 == 0:
            lst.append(my_list[i])
    return lst