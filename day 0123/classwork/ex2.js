
// 2. Create a Promise that rejects immediately with an error message "Task 2 failed". Handle the rejection using .catch.

new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Task 2 Failed")
    }, 2000)
}).catch(err => console.error(err))