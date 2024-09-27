const products = [
    {
        id: 1,
        name: "Laptop",
        brand: "Dell",
        price: 5000
    },
    {
        id: 2,
        name: "Laptop",
        brand: "HP",
        price: 50000
    },
    {
        id: 3,
        name: "Laptop",
        brand: "Lenovo",
        price: 72000
    },
    {
        id: 4,
        name: "Laptop",
        brand: "Asus",
        price: 40000
    }
];

// has some properties, method
class product {
    country = 'bangladesh';
    constructor() {
        // this.name = name;
    }
    speak(talk) {
        console.log(`talking about ${talk}`);
    }
}
const Lenovo = new product('le le lenovo');
// console.log(Lenovo);
// Lenovo.speak('oba kita kau');


class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    lecture() {
        console.log('Sir is teaching  Math');
    }
}

const tapan = new Teacher('Tapan sir', 'Physics');
console.log(tapan);
const rashid = new Teacher('rashid sir', 'English');
console.log(rashid);