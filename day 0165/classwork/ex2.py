def pythagorean_triple(integers):
    integers = sorted(integers)
    return integers[0] ** 2 == integers[1] + integers[2]