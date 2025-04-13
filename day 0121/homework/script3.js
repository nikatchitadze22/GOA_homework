// Callback for Array Manipulation with Delay
// Goal: გამოიყენე callback და setTimeout() მასივის ელემენტების შესაცვლელად, დროის დაგვიანებით.

// Task:
// წერე ფუნქცია, რომელიც იღებს რიცხვების მასივსა და callback ფუნქციას. თითოეული რიცხვის კვადრატის გამოთვლა უნდა განხორციელდეს setTimeout()-ის გამოყენებით, რათა იყოს რეალური დელაიდებული პროცესი, და შემდეგ უნდა დააბრუნოს ახალი მასივი.
function massiveDelay(massive, callback){
    setTimeout(() => {
        const listn = []
        for(let i = 0; i < massive.length; i ++){
            listn.push(massive[i] ** 2)
        }
        callback(listn)
    }, 2000)
}

function printMassive(result){
    console.log(`Squared list: ${result}`);
}


massiveDelay([2,3,4,5], printMassive)