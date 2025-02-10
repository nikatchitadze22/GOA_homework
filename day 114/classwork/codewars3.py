def remove_exclamation_marks(s):
    str = ""
    for i in s:
        if i != "!":
            str += i
    return str