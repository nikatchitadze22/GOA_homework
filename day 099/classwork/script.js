class User {
    firstName;
    lastName;
    age;

    #id;
    #isValid;

    static userCount = 0;

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.#id = Math.floor(Math.random() * 10000); 
        this.#isValid = this.#validateAge();
        if (this.#isValid) {
            User.userCount++;
        }
    }

    #validateAge() {
        return this.age > 0;
    }

    register() {
        if (this.#isValid) {
            return `User ${this.firstName} ${this.lastName} (Age: ${this.age}) has been successfully registered.`;
        } else {
            return 'Invalid user. Age must be greater than 0.';
        }
    }

    get userDetails() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age,
            id: this.#id,
        };
    }

    set updateUserDetails({ firstName, lastName, age }) {
        if (age > 0) {
            this.firstName = firstName || this.firstName;
            this.lastName = lastName || this.lastName;
            this.age = age;
            this.#isValid = this.#validateAge();
        } else {
            console.error('Invalid age. Age must be greater than 0.');
        }
    }

    static getUserCount() {
        return User.userCount;
    }
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);

    // Create a new User object
    const newUser = new User(firstName, lastName, age);

    // Register the user and display the result
    const output = newUser.register();
    document.getElementById('output').innerText = output;

    // Display user details in console
    console.log(newUser.userDetails);

    // Update user details example
    newUser.updateUserDetails = { firstName: "UpdatedFirstName", lastName: "UpdatedLastName", age: 30 };
    console.log("Updated User Details:", newUser.userDetails);

    // Get total user count
    console.log("Total Registered Users:", User.getUserCount());
});
