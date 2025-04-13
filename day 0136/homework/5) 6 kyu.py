def palindrome(num):
    if not isinstance(num, int) or num < 0:
        return "Not valid"
    
    num_str = str(num)
    count = 0
    
    for i in range(len(num_str)):
        for j in range(i + 2, len(num_str) + 1):
            if num_str[i:j] == num_str[i:j][::-1]:
                count += 1

    return count