import { divide } from "./divide.js";
import { minus } from "./minus.js";
import { multiply } from "./multiply.js";
import { plus } from "./plus.js";

document.addEventListener("DOMContentLoaded", () => {
    const selection = document.getElementById("selection");
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", () => {
        const num1 = parseFloat(prompt("Enter first number:"));
        const num2 = parseFloat(prompt("Enter second number:"));
        let result;

        switch (selection.value) {
            case "plus":
                result = plus(num1, num2);
                break;
            case "minus":
                result = minus(num1, num2);
                break;
            case "multiply":
                result = multiply(num1, num2);
                break;
            case "divide":
                result = divide(num1, num2);
                break;
            default:
                result = "Invalid operation";
        }

        alert(`Result: ${result}`);
    });
});
