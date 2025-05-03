def get_count(sentence):
    count = 0
    vowels = "aeiouAEIOU"
    for i in sentence:
        if i in vowels:
            count += 1
    return count