def largest_sum(s):
    s = s.split("0")
    scount = 0
    for i in s:
        if sum(int(x) for x in i) > scount:
            scount = sum(int(x) for x in i)
    return scount