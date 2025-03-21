def fizz_buzz_factory(pairs):
    def fizzbuzz(n):
        for num, word in reversed(pairs):
            if n % num == 0:
                return word
        return str(n)
    
    return fizzbuzz
