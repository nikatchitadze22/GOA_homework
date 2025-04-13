def number(lines):
    new_list = []
    index = 1 
    for line in lines:
        new_list.append(f"{index}: {line}")
        index += 1 
    
    return new_list