age = int(input('enter your age: '))
if age >= 0 and age < 13:
    print('bro ur minor')
elif age >= 13 and age < 18:
    print('teenager')
elif age >= 18 and age < 60:
    print('elder')
elif age > 60:
    print('ur not using python after 60')
else:
    print('ur not using python while being in stomach')