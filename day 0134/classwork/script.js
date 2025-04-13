// 2) გადმოგეცემათ დოლარების (ინტეჯერების) მასივი, შექმენით ახალი მასივი და მასში შეინახეთ ლარების ვერსია

function usdToGel(arr){
    arr.forEach(element => {
        console.log((element * 2.77).toFixed(2));
    });
}

usdToGel([10, 7.99, 8])