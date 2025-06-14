def move_zeros(lst):
    count = 0
    final = []
    for i in lst:
        if i != 0:
            final.append(i)
        else:
            count += 1
    for i in range(count):
        final.append(0)
    return final
