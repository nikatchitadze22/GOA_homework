def digit_degree(n):
    count = 0
    
    while n >= 10:
        sum_digits = 0
        while n > 0:
            sum_digits += n % 10
            n //= 10
        
        n = sum_digits
        count += 1
    
    return count