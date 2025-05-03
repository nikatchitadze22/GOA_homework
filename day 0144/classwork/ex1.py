def find_difference(a, b):
    ca = a[0]*a[1]*a[2]
    cb = b[0] * b[1] * b[2]
    return abs(cb-ca)