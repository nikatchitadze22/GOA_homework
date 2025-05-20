def find_uniq(arr):
    if arr[0] != arr[1] and arr[0] != arr[2]:
        return arr[0]

    for num in arr:
        if num != arr[0]:
            return num