def ordered_count(inp):
    seen = set()
    result = []
    for char in inp:
        if char not in seen:
            result.append((char, inp.count(char)))
            seen.add(char)
    return result
