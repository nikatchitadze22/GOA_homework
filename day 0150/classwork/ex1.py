def is_vow(inp):
    vlst = ['a', 'e', 'i', 'o', 'u']
    return [chr(i) if chr(i) in vlst else i for i in inp]
