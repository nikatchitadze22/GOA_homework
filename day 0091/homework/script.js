function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert('Please enter valid date values.');
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    if (days < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birthDate.getDate());
        days = Math.floor((today - lastMonth) / (1000 * 60 * 60 * 24));
        months--;
    }

    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
}