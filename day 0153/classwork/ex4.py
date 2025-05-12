def fix_parentheses(strng):
    open_needed = 0
    balance = 0

    for char in strng:
        if char == '(':
            balance += 1
        else:
            if balance == 0:
                open_needed += 1
            else:
                balance -= 1

    return '(' * open_needed + strng + ')' * balance
