def find_outlier(integers):
    even_count = [i % 2 == 0 for i in integers[:3]].count(True)
    if even_count >= 2:
        for i in integers:
            if i % 2 != 0:
                return i
    else:
        for i in integers:
            if i % 2 == 0:
                return i