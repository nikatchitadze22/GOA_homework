import random


def create_groups(leaders, members, group_size=3):
    random.shuffle(leaders)  # Shuffle the leaders list
    random.shuffle(members)  # Shuffle the members list

    groups = []
    member_index = 0
    for leader in leaders:
        group = [leader]
        for _ in range(2):  # Append 2 members to each leader
            if member_index < len(members):
                group.append(members[member_index])
                member_index += 1
        groups.append(group)

    return groups


leaders = [
    "1) kote khimshiashvili",
    "2) nata kvantali",
    "3) giorgi shvadze",
    "4) luka tatuashvili",
    "5) davit mefarishvili",
    "6) ilia dzindzibadze",
    "7) davit adesihvili"
]

members = [
    "ნიკოლოზ ჭიტაძე", "გიო მინდორაშვილი", "ზუკა ქორიძე", "მათე ჭიკაძე", "რატი ჩიგოგიძე",
    "ბერდია ბექაური", "საბა ისაკაძე", "ლაშა გიორგი აზალაძე", "ნიკა მაჭარაშვილი", "დათა ფოფხაძე",
    "გობრონ წითლაური", "გიგა კოჩალიძე"
]

groups = create_groups(leaders, members)

for group in groups:
    print(f"Group: {', '.join(group)}")