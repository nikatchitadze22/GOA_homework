import random

def generate_groups(leaders, members):
    random.shuffle(members)
    groups = []
    for leader in leaders:
        group_members = members[:2]
        members = members[2:]
        groups.append([leader] + group_members)
    return groups

leaders = ["Kote Ximshiashvili", "Davit Adeishvili", "Data Popxadze", "Gobron Witlauri", "Nata Kvantaliani", "Giorgi Shavadze"]
all_members = ['mate chikaidze', 'giga kochalidze', 'zuka qoridze', 'gio mindorashvili', 'rati chigogidze', 'ilia iremadze', 'davit mefarishvili', 'lasha giorgi azaladze', 'luka tatuashvili', 'nika macharashvili', 'ilia dzindzibadze', 'nikoloz chitadze']

groups = generate_groups(leaders, all_members)

for group in groups:
    print(f"Group: {', '.join(group)}")
