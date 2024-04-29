def fake_bin(x):
    result = ""
    for i in x:
        if int(i) < 5:
            result = result + "0"
        else:
            result = result + "1" 
            
    return result