def strong_enough(earthquake, age):
    magnitude = 1
    for shockwave in earthquake:
        magnitude *= sum(shockwave)
    strength = 1000 * (0.99 ** age)
    if strength >= magnitude:
        return "Safe!"
    else:
        return "Needs Reinforcement!"
