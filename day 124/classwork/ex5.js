// 6) Create a promise that rejects after 1 second with a specific error message.

new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("You ain't succeeding lil' nigga")
    }, 1000)
}).catch(err => console.log(err))

