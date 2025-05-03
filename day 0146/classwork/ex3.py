def sum_digits(num):
    count = 0
    for i in str(abs(num)):
        count += int(i)
    return count