# 3. შექმენით ფუნქცია, რომელსაც გადაეცემა ერთი დიდი წინადადება. ამ წინადადებაში,
# ყველა სიტყვა დაიწყეთ დიდი ასოთი და დააბრუნეთ წინადადება ამ სახით.
def capitalize_sentence(sentence):
    words = sentence.split()
    for i in range(len(words)):
        words[i] = words[i].capitalize()
    capitalized_sentence = ' '.join(words)
    return capitalized_sentence
print(capitalize_sentence("this is a big sentence with multiple words"))