const obj = {
    name: "Nigger",
    surname: "Johnson",
    adress: "105"
}

for(elem in obj){
    if(obj[elem].length < 5 ){
        console.log(`${elem} : ${obj[elem]}`);
    }
}