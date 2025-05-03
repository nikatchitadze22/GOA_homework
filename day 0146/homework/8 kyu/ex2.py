def sum_of_differences(arr):
    if len(arr) < 2:
        return 0
    arr.sort(reverse=True)
    return sum(arr[i] - arr[i+1] for i in range(len(arr) - 1))
