# codewars said: There will be a preloaded dictionary dict_scores


def scrabble_score(st): 
    dict_scores = 0
    return sum(dict_scores[i.upper()] for i in st if i.isalpha())