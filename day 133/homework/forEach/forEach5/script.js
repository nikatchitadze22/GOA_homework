const bey = ["valkirye", "spriggan", "longinus", "achilles", "hyperion", "helios"]

function thebest(element1){
    return element1 + " is the best"
}

bey.forEach(element => {
    console.log(thebest(element));
})