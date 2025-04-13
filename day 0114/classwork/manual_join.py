def manual_join(word_list, join_char):
    str = ""
    for i in range(len(word_list)):
        str += word_list[i]
        str += join_char
    print(str[:-1])
manual_join(["hello", "world"], " ")
manual_join(["lasha", "mas", "i", "won"], "%")