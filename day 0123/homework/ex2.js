// 6. Create a function that returns a Promise which resolves after a random delay between 1 and 5 seconds with the message "Task 1 complete".



function ex6(){
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 1 complete")
        }, Math.random() * 6000)
    }).then(data => console.log(data))
}

ex6()
