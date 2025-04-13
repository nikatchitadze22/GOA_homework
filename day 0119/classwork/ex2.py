def is_flush(cards):
    suits = set()
    
    for i in cards:
        if len(i) == 3:
            suits.add(i[2])
        else:
            suits.add(i[1])
    
    return len(suits) == 1