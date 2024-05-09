def accum(a):
    i = 0
    result = ''
    for letter in a:
        result += letter.upper() + letter.lower() * i + '-'
        i += 1
    return result[:len(result)-1]
print(accum("hidroelectrosadguri"))