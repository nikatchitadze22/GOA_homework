class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.width * this.height;
    }
}
const rect = new Rectangle(5, 4);
console.log(rect.area);
