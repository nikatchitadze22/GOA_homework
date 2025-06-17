def encode(st):
    dict_encode = {
        "a": "1",
        "e": "2",
        "i": "3",
        "o": "4",
        "u": "5"
    }
    result = ""
    for i in st:
        result += dict_encode[i] if i in dict_encode else i
    return result

def decode(st):
    dict_decode = {
        "1": "a",
        "2": "e",
        "3": "i",
        "4": "o",
        "5": "u"
    }
    result = ""
    for j in st:
        result += dict_decode[j] if j in dict_decode else j
    return result