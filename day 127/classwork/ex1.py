def char_concat(word):
    result = []
    left_side = 0
    right_side = len(word) - 1
    count = 1
    
    while left_side < right_side:
        result.append(word[left_side] + word[right_side] + str(count))
        left_side += 1
        right_side -= 1
        count += 1
    
    return ''.join(result)