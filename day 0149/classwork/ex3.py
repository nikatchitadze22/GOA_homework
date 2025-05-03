def square_color(file, rank):
    files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    file_index = files.index(file.lower()) + 1
    if (file_index + rank) % 2 == 0:
        return "black"
    else:
        return "white"