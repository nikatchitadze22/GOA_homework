def joining(words):
    i = int(input("which index do you want to remove: "))
    words[i] = "giraffe"
    " ".join(words)
    print(words)
joining(['mate', 'nika', 'sandro', 'data'])