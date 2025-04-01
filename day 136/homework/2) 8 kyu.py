def string_clean(s):
    new_str = ""
    ints = "1234567890"
    for i in s:
        if i not in ints:
            new_str += i
    return new_str