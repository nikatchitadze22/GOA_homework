def find_min_max(numbers_list):
    min = numbers_list[0]
    max = numbers_list[0]
    
    for i in numbers_list:
        if min > i:
            min = i
        if max < i:
            max = i
    
    print(min,max)

find_min_max([1,2,3,4,5])
