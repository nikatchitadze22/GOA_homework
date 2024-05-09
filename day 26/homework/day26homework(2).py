# 3) def keyword'ის გამოყენებით შექმენით len()'ის მსგავსი ფუნქცია
#  ( ფუნქცია რომელიც გამოიტანს რამდენი ელემენტია list'ში).
def lenght(mlist):
    count = 0
    for item in mlist:
        count += 1
    return count
print(lenght([1,2,3,4,5,6,7,8,9]))