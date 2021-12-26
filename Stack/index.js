import Stack from "./Stack.js";

const cars = new Stack();

cars.push("honda");
cars.push("tesla");
cars.push("Toyota");
cars.push("Mazda");

console.log(cars.peek());
console.log(cars);
