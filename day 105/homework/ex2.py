def matrix(matrix):

    new_matrix= []
    rows = len(matrix)
    cols = len(matrix[0])


    for i in range(cols):
        new_row = []
        for j in range(rows):
            new_row.append(matrix[j][i])
        new_matrix.append(new_row)

    print(new_matrix)
matrix([
        [1,2,3],
        [4,5,6],
        [7,8,9]
])