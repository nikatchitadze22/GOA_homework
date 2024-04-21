# დავალება2: შექმენით ფუნქცია სახელად manual_count: ფუნქციას გადაეცემა სია და ელემენტი. 
# თქვენ უნდა დაითვალოთ სიაში ამ ელემენტის რაოდენობა. 
# წინა დავალების მსგავსაც, აქაც for ციკლი გამოიყენეთ
def manual_count(nums, item):
    count = []
    for i in nums:
        if i == item:
            count.append(i)
    print(count)
manual_count([1,2,3,4,5], 2)
