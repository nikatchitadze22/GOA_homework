const btn = document.getElementById('submitBtn');

btn.addEventListener('click', function(e) {
    e.preventDefault();

    const stringVal = document.getElementById('stringInput').value;
    const millisecondsVal = parseInt(document.getElementById('millisecInput').value, 10);

    if (isNaN(millisecondsVal) || millisecondsVal < 0) return;

    new Promise((resolve) => {
        setTimeout(() => resolve(stringVal), millisecondsVal);
    }).then(data => console.log(data));
});
