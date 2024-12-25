def func(matrix):
    flat_list = []
    for row in matrix:
        for item in row:
            flat_list.append(str(item))
    print(list(set(flat_list)))

func([[1, 2, 3], [2, 3, 4], [4, 5, 5]])
