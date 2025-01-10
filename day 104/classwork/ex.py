def main():
    while True:
        user_input = input("შეიყვანეთ ორი რიცხვი: ")
        
        if user_input.lower() == 'exit':
            print("პროგრამა დასრულდა.")
            break

        user_input_split = user_input.split()
        if len(user_input_split) == 2 and user_input_split[0].replace('.', '', 1).isdigit() and user_input_split[1].replace('.', '', 1).isdigit():
            num1 = float(user_input_split[0])
            num2 = float(user_input_split[1])
            result = num1 * num2
            print(f"ნამრავლი: {result}")
        else:
            print("შეიყვანეთ ორი სწორი რიცხვი.")
            
main()
