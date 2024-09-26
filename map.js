// map ==> loops through each element of the array and to the operation that  you passed in the  call back   function and hold the result form each operation in an array and finally returns you the array

const numbers = [3, 2, 4, 7, 2, 6, 8, 9];

function doubleIt(num) {
    console.log('num now', num);
    return num * 2;
}

const double2 = n => n * 2;

const result = numbers.map(n => n * 2)
console.log(result);

// const doubled = [];
// for (const number of numbers) {
//     const double = number * 2;
//     doubled.push(double);
// }

// console.log(doubled);