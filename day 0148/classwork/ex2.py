def to_one_length(num):
    count = 0
    while num >= 10:
        product = 1
        for digit in str(num):
            product *= int(digit)
        num = product
        count += 1
    return count

print(to_one_length(4))    
print(to_one_length(10))   
print(to_one_length(39))    
print(to_one_length(999))  
print(to_one_length(123))    
print(to_one_length(77))    
print(to_one_length(86))     
print(to_one_length(679))   
print(to_one_length(123456))
print(to_one_length(0))     
