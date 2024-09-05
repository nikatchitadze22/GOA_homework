const form = document.getElementById('my-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const fullname = form.fullname.value;
    const email = form.email.value;
    const tel = form.tel.value;

    const tr = document.createElement('tr');

    const fullnameTd = document.createElement('td');
    fullnameTd.textContent = fullname;

    const emailTd = document.createElement('td');
    emailTd.textContent = email;

    const telTd = document.createElement('td');
    telTd.textContent = tel;

    tr.appendChild(fullnameTd);
    tr.appendChild(emailTd);
    tr.appendChild(telTd);

    document.querySelector('tbody').appendChild(tr);
});
