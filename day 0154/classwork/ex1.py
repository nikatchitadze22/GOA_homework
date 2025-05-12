def word_search(query, seq):
    new_lst = []
    for word in seq:
        if query.lower() in word.lower():
            new_lst.append(word)
    if not new_lst:
        return ["None"]
    return new_lst
