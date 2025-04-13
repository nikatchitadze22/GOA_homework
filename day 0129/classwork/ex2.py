def elevator_distance(array):
    total = 0
    for i in range(1, len(array)):
        total += abs(array[i] - array[i - 1])
    return total