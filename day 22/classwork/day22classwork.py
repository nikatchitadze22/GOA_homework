# დავალება1: შექმენით ფუნქცია სახელად manual_pop, რომელსაც გადაეცემა ინდექსი. 
# როდესაც გადაეცემა ინდექსი, სიიდან უნდა ამოიშალოს ამ ინდექსზე მყოფი ელემენტი 
# და დაბრუნდეს სია ამ სახით
# ამ დავალებისთვის გამოიყენეთ for ციკლი

def manual_pop(a):
    index = int(input("which index do you want to remove: "))
    for i in a:
        if i == index:
            a.pop(index)
    print(a)
manual_pop([1,2,3,4,5,6])