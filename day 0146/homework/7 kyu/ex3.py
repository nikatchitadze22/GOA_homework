def square_digits(num):
    nct = ""
    for i in str(num):
        nct += str(int(i)**2)
    return int(nct)