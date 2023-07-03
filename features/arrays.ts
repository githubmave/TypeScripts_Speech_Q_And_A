const carMakers = ['ford','toyota','chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] =[];

// Help with inference when extraction values

const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values

carMakers.push(100);