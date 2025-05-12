def string_to_int_list(s):
    return [int(i) for i in s.split(",") if i.strip() != ""]
