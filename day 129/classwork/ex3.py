def replace_exclamation(st):
    new_str = ""
    vowel = "aeiouAEIOU"
    for i in st:
        if i in vowel:
            new_str += "!"
        else:
            new_str += i
    return new_str