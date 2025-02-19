// Color Change Example with DOM Manipulation and Delay
// Goal: გამოიყენე callback და setTimeout() DOM-სთან ურთიერთობისთვის და დროის დაგვიანებით გვერდის განახლებისთვის.

// Task:
// წერე ფუნქცია, რომელიც იღებს ფერს და callback ფუნქციას. setTimeout()-ის გამოყენებით უნდა ჩაიწეროს ცვლადში ფერი 2 წამში, შემდეგ callback უნდა შეცვალოს ტექსტის ფერი.

function changeTextColor(color, callback) {
    setTimeout(() => {
        callback(color);
    }, 2000);
}

function updateColor(newColor) {
    const textElement = document.getElementById("text");
    textElement.style.color = newColor;
}

document.getElementById("changeColorButton").addEventListener("click", function(event) {
    event.preventDefault();
    changeTextColor("blue", updateColor);
});
