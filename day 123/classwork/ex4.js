// 4. Create a function that returns a Promise which resolves after 2 seconds with a message "First". Chain another then that waits 1 second before logging "Second"


function promise1(){
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("first")
        })
    })
}