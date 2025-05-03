def duplicate_encode(word):
    final_str = ""
    for i in word.lower():
        count = 0
        for j in word.lower():
            if i == j:
                count += 1
        if count > 1:
            final_str += ")"
        else:
            final_str += "("
    return final_str