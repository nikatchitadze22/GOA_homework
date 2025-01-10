def func(matrix):
    joined_mtx = []
    for i in matrix:
        for j in i:
            joined_mtx.append(j)
    print(sum(joined_mtx))
func([
    [1,3],
    [1,4],
    [4,1],
    [2,2]
])