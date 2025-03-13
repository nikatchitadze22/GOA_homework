def smallest_integer(matrix):
    numbers = []
    for row in matrix:
        for num in row:
            if num not in numbers:
                numbers.append(num)

    smallest = 0
    while smallest in numbers:
        smallest += 1

    return smallest