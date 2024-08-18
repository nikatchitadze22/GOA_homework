year = [ 1990, 1991, 1992, 1993, 1994]
print('remember that number indexing starts from zero!!!')
user_choice = int(input('which year were you born: '))
if user_choice >=0 and user_choice <=5:
    print('your year is: ' + str(year[user_choice]))
else:
    print('!enter number from 0 to 5!')
