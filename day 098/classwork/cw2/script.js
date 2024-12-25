const data = [
    {name: 'lasha', age: 30},
    {name: 'merabi', age: 15}
];

for (let i of data){
    for(let key in i){
        let lit = `${key} : ${i[key]} `
        console.log(lit)
    }
}
