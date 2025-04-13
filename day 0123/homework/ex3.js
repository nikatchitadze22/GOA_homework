// 7. Create a function that returns a Promise which resolves after a random delay between 1 and 3 seconds with the message "First". Chain another .then that waits for another random delay between 1 and 3 seconds before logging "Second".



function ex7() {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve("First");
        }, Math.random() * 2000 + 1000);
    })
    .then(data => {
        console.log(data);
        return new Promise(resolve => setTimeout(() => {
            console.log("Second");
            resolve();
        }, Math.random() * 2000 + 1000));
    });
}

ex7();
