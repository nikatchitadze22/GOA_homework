// Wait for the document to load before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the form and message elements
    const form = document.getElementById("registrationForm");
    const message = document.getElementById("message");

    // Add an event listener to the form's submit event
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission and page reload

        // Get the values from the input fields
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const favoriteColor = document.getElementById("favoriteColor").value;

        // Check if all fields are filled
        if (fullName === "" || email === "" || password === "" || favoriteColor === "") {
            // If any field is empty, display an error message
            message.textContent = "Please fill in all fields.";
            message.style.color = "red";
        } else {
            // If all fields are filled, display a success message
            message.textContent = "All fields are filled. Form submitted successfully!";
            message.style.color = "green";
        }
    });
});