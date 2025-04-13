function invertMap(originalMap) {
    let finalMap = new Map()
    for ([key, value] of originalMap){
        finalMap.set(value, key)
    }
    return finalMap
}
console.log(invertMap(new Map([['a', 1], ['b', 2], ['c', 1]]))); 