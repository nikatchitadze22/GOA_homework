def halving_sum(n):
    listn = []
    while n >= 1:
        listn.append(n)
        n = n // 2
    return sum(listn )