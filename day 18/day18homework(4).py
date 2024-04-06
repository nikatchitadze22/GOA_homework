# ცვლადში შეინახეთ თქვენი სახელი. 
# თუ მისი სიგრძე აღემატება ხუთს, გარდაქმენით მთლიანი 
# სიტყვა uppercase-ად, სხვა შემთხვევაში კი lowecase-ად. 
# საბოლოოდ კი დაბეჭდეთ გარდაქმნილი სახელი.

name = input("hi enter your name: ")
if len(name) > 5:
    print(name.upper())
else:
    print(name.lower())