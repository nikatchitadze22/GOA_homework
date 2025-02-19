// 1. Create a simple Promise that resolves after 2 seconds with the message "Task 1 complete".\

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 1 complete");
    }, 2000);
}).then(data => console.log(data));
