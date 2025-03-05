def similarity(a, b):
    similar_list = []
    unioned_list = []
    for i in a:
        unioned_list.append(i)
    for j in b:
        if j not in unioned_list:
            unioned_list.append(j)
    for i in unioned_list:
        if i in a and i in b:
            similar_list.append(i)
    return len(similar_list) / len(unioned_list)