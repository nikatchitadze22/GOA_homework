def matrixfy(st):
    if len(st) == 0:
        return "name must be at least one letter"
    import math
    size = math.ceil(len(st)**0.5)
    needed = size * size - len(st)
    st += '.' * needed
    matrix = []
    for i in range(0, len(st), size):
        matrix.append(list(st[i:i+size]))
    return matrix
