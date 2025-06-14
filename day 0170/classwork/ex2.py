def cannons_ready(gunners):
    lst = []
    s = "nay"
    for i, j in gunners.items():
        lst.append(j)
    return "Fire!" if s not in lst else "Shiver me timbers!"