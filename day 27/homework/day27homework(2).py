# 2. შექმენით ფუნქცია, რომელსაც გადაეცემა სახელების სია. 
# ლუწ ინდექსებზე მყოფი სახელები გადაიყვანეთ uppercase-ში,
# ხოლო კენტ ინდექსებზე მყოფნი კი lowercase-ში.
def naames(names):

    converted_names = []
    for i in range(len(names)):
     if i % 2 == 0:
           converted_names.append(names[i].upper())
     else:
         converted_names.append(names[i].lower())

    print(converted_names)
naames(["sandro", "data", "mate", "nika", "barbare", "Jonathani"])