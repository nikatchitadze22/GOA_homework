// // 1) შექმენით ანიმაცია სადაც ყუთი ჯერ დაიწყებს მარჯვნივ წასვლას,
//  როცა ის კიდესთან მივა მარჯენა მხარეს დაიწყოს ბოლოში ცავსლა,
//   როცა ბოლოში ჩავა წავიდეს მარცხნივ და 
//   როცა მარცხნივ გადავა წავიდეს ზემოთ,
//  შემდეგ კი ეს ციკლი სამუდამოდ გააგრძელოს

const box = document.getElementById('box');
    const container = document.getElementById('container');

    let x = 0, y = 0; 
    let direction = 'right'; 

    function animateBox() {
        const boxSize = 50;
        const containerSize = 200;

        if (direction === 'right') {
            x++;
            if (x >= containerSize - boxSize) {
                direction = 'down';
            }
        } else if (direction === 'down') {
            y++;
            if (y >= containerSize - boxSize) {
                direction = 'left';
            }
        } else if (direction === 'left') {
            x--;
            if (x <= 0) {
                direction = 'up';
            }
        } else if (direction === 'up') {
            y--;
            if (y <= 0) {
                direction = 'right';
            }
        }

        box.style.left = x + 'px';
        box.style.top = y + 'px';
    }

    setInterval(animateBox, 10);