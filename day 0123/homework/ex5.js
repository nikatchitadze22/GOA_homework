// 9. Create a function that returns a Promise which resolves after a random delay between 1 and 5 seconds with the message "Task 1 complete" if the random number is greater than 0.5, otherwise, it should resolve with the message "Task 1 was quick".


function ex9() {
    new Promise((resolve, reject) => {
        let delay = Math.random() * 4000 + 1000;
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Task 1 complete");
            } else {
                resolve("Task 1 was quick");
            }
        }, delay);
    }).then(message => console.log(message));
}

ex9();
