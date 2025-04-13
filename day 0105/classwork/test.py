def domain_name(url):
    i = 0
    if url[i:i+7] == "http://":
        if url[i+7:i+11] == "www.":
            i = 11
        else:
            i = 7
    elif url[i:i+8] == "https://":
        if url[i+8:i+12] == "www.":
            i = 12
        else:
            i = 8
    elif url[i:i+4] == "www.":
        i = 4

    domain = ""
    while i < len(url):
        if url[i] == ".":
            break
        domain += url[i]
        i += 1

    print(domain)

domain_name("http://www.codewars.com/kata/")
domain_name("https://youtube.com")
