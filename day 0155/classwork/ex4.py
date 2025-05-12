def solve(a,b):
    return "".join([i for i in a if i not in b] + [j for j in b if j not in a])