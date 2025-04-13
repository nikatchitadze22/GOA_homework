function noDupes(lst) {
    const set = new Set()
    const newLst = [];
    for(let i of lst){
        newLst.push(i)
    }
    return newLst
}

