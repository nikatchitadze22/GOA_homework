// Basic Callback - Logging a Message with Delay
// Goal: გაიგო, როგორ გამოიყენება callback ფუნქცია და setTimeout().

// Task:
// წერე ფუნქცია, რომელიც იღებს name და callback ფუნქციას. ფუნქცია უნდა დაიდოს setTimeout()-ში, რომ 2 წამში დაბეჭდოს მისასალმებელი მესიჯი.


function greetWithDelay(name, callback) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
        callback();
    }, 2000);
}

function onGreetingComplete() {
    console.log("Greeting complete.");
}

greetWithDelay("Nikoloz", onGreetingComplete);
