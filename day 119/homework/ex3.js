function students(map){
    for(let [key, value] of map){
        map.set(key, value + 5)
    }
    return map
}

