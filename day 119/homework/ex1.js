function students(lst){
    const map = new Map();
    for (let i of lst) {
        map.set(i.split(": ")[0], i.split(": ")[1])
    }
    return map
}