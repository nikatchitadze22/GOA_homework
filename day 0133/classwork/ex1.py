def row_weights(array):
    even = sum(array[i] for i in range(len(array)) if i % 2 == 0)
    odd = sum(array[i] for i in range(len(array)) if i % 2 != 0)
    return even, odd
