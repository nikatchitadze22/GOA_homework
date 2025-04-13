# 3) შევქმნათ ფუნქცია რომელიც გადაცემულდ nXn
# მატრიცის დიაგონალურად განწყობილი
# ელემენტების ჯამს დააბრუნებს (უნდა დაბრუნდეს ორი რიცხვი).

def diagonal(matrix):
    first_diagonal = []
    second_diagonal = []
    for i in range(len(matrix)):
        first_diagonal.append(matrix[i][i])
    j = len(matrix) - 1
    while j >= 0:
        for k in range(len(matrix)):
            second_diagonal.append(matrix[j][k])
            j -= 1
    print(sum(first_diagonal))
    print(sum(second_diagonal))
diagonal([
        [1,2,3],
        [4,5,6],
        [7,8,9]
])