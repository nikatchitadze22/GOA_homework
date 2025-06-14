def valid_phone_number(p):
    lst = []
    if len(p) == 14:
        if p[0] == "(" and p[4] == ")":
            lst.append("y")
        else:
            lst.append("n")

        if p[5] == " ":
            lst.append("y")
        else:
            lst.append("n")

        if p[9] == "-":
            lst.append("y")
        else:
            lst.append("n")

        if p[1:4].isdigit() and p[6:9].isdigit() and p[10:].isdigit():
            lst.append("y")
        else:
            lst.append("n")
    else:
        lst.append("n")

    return True if "n" not in lst else False