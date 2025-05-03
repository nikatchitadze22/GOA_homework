def biggest_vowel(s):
    fcount = 0
    count = 0
    vowels = "aeiouAEIOU"
    for i in s:
        if i in vowels:
            count += 1
            if count > fcount:
                fcount = count
        else:
            count = 0
    return fcount
print(biggest_vowel("aeiOU"))
print(biggest_vowel("AEJIOU"))
print(biggest_vowel("BDFGFHasdfredfaeijkhjhghOUAEI"))