# 2) შექმენით ფუნქცია რომელსაც გადაეცემა 
# list = ["name1" , "name2" , "name3"....]
# შემდეგ მომხმარებელს კითხეთ რომელი ინდექსის შეცვლა სურს 
# და ამის მიხედვით შეცვალეთ ის კონკრეტული ინდექსი თქვენი
# სასურველი სტრინგით და ბოლოს შეაერთეთ 
# join() ფუნქციის მეშვეობით 


def joining(words):
    i = int(input("which index do you want to remove: "))
    words[i] = "giraffe"
    " ".join(words)
    print(words)
joining(['mate', 'nika', 'sandro', 'data'])