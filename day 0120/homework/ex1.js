function isSub(sub, main){
    for (let item of sub){
        if(!main.has(item)){
            return false
        }
    }
    return true
}

console.log(isSub(new Set([1,2]), new Set([1,2,3])));