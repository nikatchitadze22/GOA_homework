def arr_check(arr):
    for i in arr:
        if not isinstance(i, list):
            return False
    return True