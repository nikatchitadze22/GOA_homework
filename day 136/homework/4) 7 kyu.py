def convert(st):
    new_str = ""
    for i in st:
        if i == "a":
            new_str += "o"
        elif i == "o":
            new_str += "u"
        else:
            new_str += i
    return new_str