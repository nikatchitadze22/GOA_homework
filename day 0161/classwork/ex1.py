def count_positives_sum_negatives(arr):
    if not arr:
        return []
    
    neg_arr = 0
    pos_arr = 0
    for i in arr:
        if i > 0:
            pos_arr += 1
        else:
            neg_arr += i
    return [pos_arr, neg_arr]