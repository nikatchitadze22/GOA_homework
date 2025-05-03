def my_languages(results):
    lst = []
    for i, j in results.items():
        if j >= 60:
            lst.append(i)
    lst.sort(reverse=True) 
    lst.sort(key=results.get, reverse=True)
    return lst