def printer_error(s):
    abeta = "abcdefghijklm"
    count = 0
    for i in s:
        if i not in abeta:
            count += 1
    return f"{count}/{len(s)}"