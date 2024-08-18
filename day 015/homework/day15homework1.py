def initials (full_name):
    name = full_name.split()

    first_initial=(name[0][0]).upper()
    second_initial=(name[1][0]).upper()
    print((first_initial) + '.' + (second_initial))
initials('nikoloz tchitadze')