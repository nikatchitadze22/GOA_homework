def min_funk(arr) :

    start_num = arr[0]


    for i in arr:
        if start_num < i:
            start_num = i

    return start_num

print(min_funk([1,5,2,8,4,6,11,64,23,7,9,]))
