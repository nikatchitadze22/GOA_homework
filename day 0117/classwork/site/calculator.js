class Calculator {
    static multiply(number1, number2) {
        return number1 * number2;
    }

    static add(number1, number2) {
        return number1 + number2;
    }
}

const addBtn = document.getElementById("add");
const multBtn = document.getElementById("mult");

addBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const num1 = +document.getElementById("num1").value;
    const num2 = +document.getElementById("num2").value;
    console.log(Calculator.add(num1, num2));
});

multBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const num1 = +document.getElementById("num1").value;
    const num2 = +document.getElementById("num2").value;
    console.log(Calculator.multiply(num1, num2));
});
