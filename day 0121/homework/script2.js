// Callback with Time Delay (Simulate a Process)
// Goal: გამოიყენე callback და setTimeout() დროის დაგვიანებისათვის, რომ შეიქმნას რეალური პროცესის მოლოდინი.

// Task:
// წერე ფუნქცია, რომელიც იღებს მესიჯს და callback ფუნქციას. ფუნქცია უნდა დაბეჭდოს მესიჯი 2 წამით დაგვიანებით setTimeout()-ის გამოყენებით. შემდეგ callback უნდა ამოწმებდეს, რომ პროცესი დასრულდა.


function timedelay(number, callback){
    setTimeout(()=>{
        console.log(`you made transaction, Sum: ${number}`);
        callback()
    }, 2000)
}

function operation(){
    setTimeout(() => {
        console.log(`transaction complete`);
    }, 2000)
}

timedelay(1000, operation)