const num = 42;
const bigIntNum = 9007199254740991n;
const isJavaScriptAwesome = true;
const greeting = "Hello, World!";
const uniqueId = Symbol("id");
const emptyValue = null;
let notAssigned;

console.log(typeof num);
console.log(typeof bigIntNum);
console.log(typeof isJavaScriptAwesome);
console.log(typeof greeting);
console.log(typeof uniqueId);
console.log(typeof emptyValue);
console.log(typeof notAssigned);

function exampleFunction() {}
console.log(typeof exampleFunction);

const numbers = [1, 2, 3, 4, 5];
const imperativeDoubles = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    imperativeDoubles.push(numbers[i] * 2);
  }
}

const doubleNumber = (n) => n * 2;
const isEven = (n) => n % 2 === 0;

const declarativeDoubles = numbers.filter(isEven).map(doubleNumber);

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const user = new Person("Alex");

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("userJoined", (name) => {
  console.log(`Event Driven: ${name} has joined the system.`);
});

eventEmitter.emit("userJoined", user.name);
