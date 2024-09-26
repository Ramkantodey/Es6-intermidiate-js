// data access

const data = [{ id: 1, name: 'abul', address: 'kocu ket' }];
// console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        { id: 1, name: 'lenovoLaptop', price: 63434 },
        { id: 2, name: 'macbook', price: 165000 },
    ]
}
// second product price dorkar amr
// console.log(products.data[1].price);


const user = {
    id: 5001,
    name: 'ramkanto',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribar er goli',
            third: 'no dorai',
        },
        city: "Dhaka",
    }
}

// console.log(user.address.street.second);


const user2 = {
    id: 5002,
    name: 'pori bibir majar',
    address: {
        city: 'chittagong',
        country: 'bangladesh',
    }
}


console.log(user.address.street?.second);
console.log(user2.address.street?.second);