def animals(heads, legs):
    if heads == 0 and legs == 0:
        return (0, 0)
    if heads < 0 or legs < 0:
        return "No solutions"
    
    cows = (legs - 2 * heads) / 2
    chickens = heads - cows

    if cows % 1 != 0 or chickens % 1 != 0:
        return "No solutions"
    if cows < 0 or chickens < 0:
        return "No solutions"
    
    return (int(chickens), int(cows))