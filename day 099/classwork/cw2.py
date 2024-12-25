def func(matrix):
    flat_list = []
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            count = 0
            for k in range(len(matrix)):
                for l in range(len(matrix[k])):
                    if matrix[i][j] == matrix[k][l]:
                        count += 1
            if count == 1:
                flat_list.append(matrix[i][j])
    print(flat_list)

func(
    [[1,2,3],[2,3,4],[4,5,6]]
)
# <3