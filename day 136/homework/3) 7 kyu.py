def nickname_generator(name):
    vowels = "aeiouAEIOU"
    if len(name) < 4:
        return "Error: Name too short"
    if name[2] in vowels:
        return name[:4]
    return name[:3]