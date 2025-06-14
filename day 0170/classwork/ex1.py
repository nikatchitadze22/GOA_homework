def is_pangram(st):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    for i in alphabet:
        if i not in st.lower():
            return False
    return True