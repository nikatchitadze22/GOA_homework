const emlDt = [
    { subject: "მოგზაურობა", content: "ნუ დაგავიწყდებათ თქვენი ბილეთები", receivedDate: "2024-12-15" },
    { subject: "მოხსენება", content: "გთხოვთ, წაიკითხოთ ბოლო ანგარიში", receivedDate: "2024-12-12" },
    { subject: "მოგზაურობა", content: "ძალიან კარგი შეთავაზება მაქვს", receivedDate: "2024-12-13" },
    { subject: "გაცნობიერება", content: "შესაძლებელია მცირე შეცდომები", receivedDate: "2024-12-10" }
];

const subjectFltr = document.getElementById('filter');
const filterBtn = document.getElementById('applyFilter');
const listCont = document.getElementById('emailList');

filterBtn.addEventListener('click', function () {
    const selectedSubject = subjectFltr.value;
    listCont.innerHTML = '';
    for (const em of emlDt) {
        if (selectedSubject && em.subject.startsWith(selectedSubject)) {
            const listItem = document.createElement('li');
            listItem.textContent = `${em.subject}: ${em.content}`;
            listCont.appendChild(listItem);
        }
    }

    const crntDt = new Date();
    filterTime.textContent = `Filter button clicked at: ${crntDt.toLocaleString()}`;

});
