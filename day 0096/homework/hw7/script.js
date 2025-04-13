const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    publisher: "Scribner"
};

const { year, publisher, ...rest } = book;
console.log(rest);
