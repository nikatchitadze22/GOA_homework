def generate_hashtag(s):
    if not s.strip():
        return False
    hashtag = "#" + "".join(word.capitalize() for word in s.split())
    return hashtag if len(hashtag) <= 140 else False
