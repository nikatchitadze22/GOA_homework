def bin_rota(arr):
    final_arr = []
    for i in arr:
        if arr.index(i) % 2 == 0:
            for j in i:
                final_arr.append(j)
        else:
            for j in reversed(i):
                final_arr.append(j)
    return final_arr