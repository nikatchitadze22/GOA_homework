def number(bus_stops):
    last = 0
    for i in bus_stops:
        j = i[0] - i[1]
        last += j
    return last