user_input = input("enter the word: ")

new = ""
for i in user_input:
    if i.isupper():
        new += i.lower()
    elif i.islower():
        new += i.upper()
print(new)
