// 8. Create a function that returns a Promise which rejects after a random delay between 1 and 4 seconds with an error message "Task 3 failed". Handle the rejection with a .catch to log the error message.



function ex8(){
    new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Task 3 failed")
        }, Math.random() * 3000 + 1000)
    }).catch(err => console.error(err))
}

ex8()