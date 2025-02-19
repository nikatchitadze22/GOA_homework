// 10. Create a function that returns a Promise which resolves after a random delay between 1 and 4 seconds. If the random number is less than 0.3, reject with an error message "Task 3 failed". Otherwise, resolve with the message "Task 3 complete". Handle the rejection with a .catch to log the error message.


function ex10() {
    let delay = Math.random() * 3000 + 1000;
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve("Task 3 complete");
            } else {
                reject("Task 3 failed");
            }
        }, delay);
    })
    .then(data => console.log(data))
    .catch(err => console.error(err))
}

ex10();
