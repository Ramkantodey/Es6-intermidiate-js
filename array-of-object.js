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

// map
const prices = products.map(product => product.brand);
// console.log(prices);
const brands = products.map(product => product.price);
// console.log(brands);


// forEach
// products.forEach(product => console.log(product.id));

// filter
const expensive = products.filter(product => product.price > 50000);
// console.log(expensive);


// find
const affordable = products.find(product => product.price < 50000);
// console.log(affordable);


// reduce 
const total = products.reduce((acum, current) => acum + current.price, 0);
console.log(total);