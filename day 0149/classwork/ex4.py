def password(st):
    upc = 0
    lowc = 0
    numc = 0
    lenst = len(st)
    for i in st:
        if i.isupper():
            upc += 1
        elif i.islower():
            lowc += 1
        elif i.isdigit():
            numc += 1
    position = 0
    if upc > 0:
        position += 1
    if lowc > 0:
        position += 1
    if numc > 0:
        position += 1
    if lenst > 7:
        position += 1
    return position == 4