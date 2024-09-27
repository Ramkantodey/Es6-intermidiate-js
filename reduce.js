const numbers = [2, 4, 6, 4, 6, 73];
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);

const sum = numbers.reduce((p, c) => p + c, 0);
console.log(sum);