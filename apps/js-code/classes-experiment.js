class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log('omomomom');
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    bark() {
        console.log('woof woof');
    }
}

// const dog = new Dog('Buddy');
// console.log(dog.name);
// dog.eat();
// dog.bark();


class Product {
    #rawPrice;

    constructor(value) {
        this.price = value;
    }

    get price() {
        return `${this.#rawPrice} PLN`;
    }

    set price(value) {
        if (value < 0) {
            throw new Error('Price cannot be negative');
        }
        this.#rawPrice = value;
    }
}

const product = new Product(100);
console.log(product.price);