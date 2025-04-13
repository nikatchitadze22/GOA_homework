// 3. Create a Promise that resolves with a number (e.g., 5). Chain a .then handler to double the number and return it, then chain another .then handler to log the doubled number.


new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5)
    }, 2000)
}).then(data => data * 2).then(argument => console.log(argument))