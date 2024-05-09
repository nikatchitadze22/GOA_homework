def remove_smallest(numbers):
    a = numbers[:]
    if a:
        a.pop(min(a))
    return a
print([1,2,3,4,5,6,7])