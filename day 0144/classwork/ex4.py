def how_much_i_love_you(nb_petals):
    dict = {
        1: "I love you",
        2: "a little",
        3: "a lot",
        4: "passionately",
        5: "madly",
        6: "not at all"
    }
    return dict[nb_petals%6] if nb_petals%6 != 0 else dict[6]