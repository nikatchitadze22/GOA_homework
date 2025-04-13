def comp(array1, array2):
    if array1 is None or array2 is None:
        return False
    if len(array1) != len(array2):
        return False
    
    squared_array1 = [x ** 2 for x in array1]
    return sorted(squared_array1) == sorted(array2)