class Creature {
    constructor(image, title, lifespan, diet) {
        this.image = image;
        this.title = title;
        this.lifespan = lifespan;
        this.diet = diet;
    }
    displayInfo() {
        return `
            <div class="creature-card">
                <img src="${this.image}">
                <p class="creature-title">Name: ${this.title}</p>
                <p class="creature-lifespan">Age: ${this.lifespan}</p>
                <p class="creature-diet">Eats: ${this.diet}</p>
            </div>
        `;
    }
}

class Alpha extends Creature {
    constructor(image, title, lifespan, diet) {
        super(image, title, lifespan, diet);
    }
    displayInfo() {
        return `
            <div class="creature-card">
                <img src="${this.image}">
                <p class="creature-title">Alpha Name: ${this.title}</p>
                <p class="creature-lifespan">Alpha Age: ${this.lifespan}</p>
                <p class="creature-diet">Alpha Eats: ${this.diet}</p>
            </div>
        `;
    }
}

class Encyclopedia {
    constructor(creatures) {
        this.creatures = creatures;
    }
    render() {
        this.creatures.forEach(creature => {
            document.querySelector('.creatures').innerHTML += creature.displayInfo();
        });
    }
}

let creatureArray = [
    new Alpha("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrTuF_BVCYr8cvAWkW0dyRy90ycuBNg4xQcw&s", "Tiger Vitali", 15, "Meat"),
    new Creature("https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/@@images/1a36b305-412d-405e-a38b-0947ce6709ba.jpeg", "Penguin", 11, "Fish"),
    new Creature("https://i.pinimg.com/736x/e5/b9/81/e5b98110fcd62d6ebe0e636262170175.jpg", "Dawg", 11, "Cats")
];

const encyclopediaApp = new Encyclopedia(creatureArray);
encyclopediaApp.render();
