def comfortable_word(word):
    l = "qwertasdfgzxcvb"
    r = "yuiophjklnm"
    h = None
    
    for c in word:
        if c in l:
            if h == "l":
                return False
            h = "l"
        elif c in r:
            if h == "r":
                return False
            h = "r"
        else:
            return False
    
    return True