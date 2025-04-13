const yearDisplay = document.getElementById("years-h1");
const monthDisplay = document.getElementById("months-h1");
const dayDisplay = document.getElementById("days-h1");

const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");

const nowDate = new Date();
const nowYear = nowDate.getFullYear();
const nowMonth = nowDate.getMonth();
const nowDay = nowDate.getDate();

const submit = document.getElementById("submitBtn");

submit.addEventListener('click', function() {
    let years = nowYear - year.value;
    let months = nowMonth - (month.value - 1);
    let days = nowDay - day.value;

    if (days < 0) {
        months--;
        days += new Date(nowYear, nowMonth, 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    yearDisplay.innerHTML = years;
    monthDisplay.innerHTML = months;
    dayDisplay.innerHTML = days;
});
