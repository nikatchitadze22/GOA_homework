fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
    users.sort((a, b) => {
    if (a.name < b.name) {
        return -1; 
    }
    if (a.name > b.name) {
        return 1;
    }
    });

    console.log(users);
    })
    .catch(error => {console.error('Error fetching data:', error); // Handle any errors
});
