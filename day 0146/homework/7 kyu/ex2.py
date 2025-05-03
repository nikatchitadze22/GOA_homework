def disemvowel(st):
    nst = ""
    vowels = "aeiouAEIOU"
    for i in st:
        if i not in vowels:
            nst += i
    return nst