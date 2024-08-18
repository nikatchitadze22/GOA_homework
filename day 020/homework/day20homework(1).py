my_list = [1,-1,2,-3,3,-6,4,-9,7]
pos_list = []
neg_list = []
for i in my_list:
    if i > 0:
        pos_list.append(i)
    else:
        neg_list.append(i)
print(pos_list,neg_list)