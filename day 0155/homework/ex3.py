def comes_after(st, l):
    new_str = ""
    for i in range(len(st) - 1):
        if st[i].lower() == l.lower() and st[i + 1].isalpha():
            new_str += st[i + 1]
    return new_str
