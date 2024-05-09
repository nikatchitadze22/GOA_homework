def to_jaden_case(string):
    listn = string.split()
    result = []
    for i in listn:
        cap_string = i.capitalize()
        result.append(cap_string)
    return ' '.join(result)
print(to_jaden_case("how can mirrors be real if eyes are not"))