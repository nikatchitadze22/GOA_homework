def most_frequent_item_count(collection):
    if collection == []:
        return 0
    lst = []
    for i in collection:
        count = 0
        for j in collection:
            if i == j:
                count += 1
        lst.append(count)
        count = 0
    return max(lst)