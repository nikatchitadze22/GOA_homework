def replace_nth(text, n, old_value, new_value):
    if n <= 0 or text.count(old_value) < n:
        return text

    result = ""
    count = 0

    for char in text:
        if char == old_value:
            count += 1
            if count % n == 0:
                result += new_value
            else:
                result += char
        else:
            result += char

    return result