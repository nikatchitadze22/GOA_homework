def multi_table(number):
    res = []
    for i in range(1, 11):
        r = i * number
        res.append(f"{i} * {number} = {r}")
    return "\n".join(res)