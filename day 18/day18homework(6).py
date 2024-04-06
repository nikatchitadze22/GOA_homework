# მომხმარებელს შემოატანინეთ სახელი, შემდეგ კი გვარი. 
# შეინახეთ ისინი სიაში და წინა დავალების მსგავსად იმუშავეთ 
# ყველა ელემენტზე capitalize მეთოდით. თქვენი დავალებაა, 
# რომ გამოიტანოთ მომხმარებლის ინიციალები სთრინგის სახით.
# test case: input) "Data", "Tezelashvili" -> output: "D.T"
name = input("hi enter your name: ")
lastname = input("hi enter your last name: ")
full_name = [name, lastname]
full_name1 = [full_name[0].capitalize(),full_name[1].capitalize()]
print(full_name1[0][0] + '.' + full_name1[1][0])



# def initials (full_name):
#     name = full_name.split()

#     first_initial=(name[0][0]).upper()
#     second_initial=(name[1][0]).upper()
#     print((first_initial) + '.' + (second_initial))
# initials('nikoloz tchitadze')