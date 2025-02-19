// 5. Create a function that returns a Promise which rejects after 2 seconds with an error message "Task 3 failed". Handle the rejection with a .catch to log the error message.


function ex5(){
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Task 3 failed")
        }, 2000)
    }).catch(err => console.log(err))
}

ex5()