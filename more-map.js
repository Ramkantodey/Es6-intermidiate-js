const numbers = [12, 10, 8, 15, 7];

const double = numbers.map(num => num * 2)
// console.log(double);

const fiveBounus = numbers.map(num => num + 5)
// console.log(fiveBounus);

const halves = numbers.map(num => num / 2);
// console.log(halves);


const friends = ['tom', 'jfdon', 'mdfdon', 'kodfdfdn'];
const length = friends.map(frd => frd.length);
// console.log(length);


const firstChar = friends.map(frdFirst => frdFirst[0]);
console.log(firstChar);