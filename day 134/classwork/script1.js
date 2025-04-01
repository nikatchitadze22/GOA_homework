// 3) გადმოგეცემათ მასივი სიტყვების და შეინახეთ სხვა ცვლადში მხოლოდ პალინდრომები

function palindrome(arr) {
    return arr.filter(word => word === word.split("").reverse().join(""));
}

console.log(palindrome(["world", "madam", "abba", "tea"]));
