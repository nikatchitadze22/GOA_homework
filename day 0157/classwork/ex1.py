def sum_dig_pow(a, b):
    new_lst = []
    for i in range(a, b + 1):
        digits = str(i)
        total = 0
        for j in range(len(digits)):
            total += int(digits[j]) ** (j + 1)
        if total == i:
            new_lst.append(i)
    return new_lst
