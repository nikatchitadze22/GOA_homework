const numbers = [1,2,3,4,5,6,7,8]

function display(element1){
    return (element1 + "3");
}

function typeofel(element2){
    return typeof(element2)
}

numbers.forEach(element => {
    console.log(display(element));
    console.log(typeofel(element));
})

console.log(typeof(3 + "3"));