# დავალება 2: ქვემოთ მოცემულია Python კოდი, რომელიც უნდა აბრუნებდეს ორი უდიდესი განსხვავებული რიცხვის ჯამს სიაში, მაგრამ კოდი არასწორად მუშაობს.

# წაიკითხე კოდი ყურადღებით.
# იპოვე შეცდომა(ები). (აქაც გაშვების გარეშე)
# შესწორებული კოდი დაწერე.
# def sum_two_largest(lst):
#     if len(lst) < 2:
#         return None

#     max1 = max(lst)
#     max2 = max(lst)

#     return max1 + max2

# print(sum_two_largest([3, 7, 2, 9, 5]))  # მოსალოდნელი შედეგი: 16 (9 + 7)
# print(sum_two_largest([10, 10, 5, 3]))   # მოსალოდნელი შედეგი: 20 (10 + 10)

def sum_two_largest(lst):
    if len(lst) < 2:
        return None
    
    lst = sorted(lst)
    max1 = lst[-1]
    max2 = lst[-2]
    return max1 + max2
print(sum_two_largest([10, 10, 5, 3]))
print(sum_two_largest([3, 7, 2, 9, 5]))