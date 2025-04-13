def series_sum(n):
    count = 1
    num = 0
    for i in range(n):
        num += 1 / count
        count += 3
    return f"{num:.2f}"