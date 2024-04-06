# მომხმარებელს შემოატანინეთ სიტყვა. თქვენი დავალებაა,
# რომ ლუწ ინდექსებზე მყოფი ასოები გარდაქმნათ uppercase-ად, 
# ხოლო კენტ ინდექსებზე მყოფები lowecase-ად, საბოლოოდ კი დაბეჭდოთ შედეგი.

name = input("hi enter your name: ")
for i in range (0, len(name)):
    if i % 2 == 0:
        i.upper()
    else:
        i.lower()
print(name)