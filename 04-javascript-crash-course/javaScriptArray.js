
// ==========================================
// 1. CREATION, CHECKS & MUTATION BASICS
// ==========================================

// Array Initialization
const arr = [1, 2, 3, 4];

// Element Modification
arr[1] = 10; // Mutates index 1 -> [1, 10, 3, 4]

// Adding & Removing Elements (Mutates Original)
arr.push(4);            // Adds to end -> [1, 10, 3, 4, 4]
arr.push(4, 5, 6);      // Adds multiple -> [1, 10, 3, 4, 4, 4, 5, 6]
arr.pop();              // Removes last element -> [1, 10, 3, 4, 4, 4, 5]

arr.unshift(3, 2, 1);   // Adds to beginning -> [3, 2, 1, 1, 10, 3, 4, 4, 4, 5]
arr.shift();            // [NEW] Removes first element -> [2, 1, 1, 10, 3, 4, 4, 4, 5]

// Type Checking
console.log(typeof arr);            // "object"
console.log(arr instanceof Array);  // true
console.log(Array.isArray(arr));    // [NEW] true (Best practice check)


// ==========================================
// 2. SEARCHING, COMBINING & CONVERSION
// ==========================================

const numbers = [1, 2, 3, 4, 3, 4];

// Index & Existence Searching
console.log(numbers.indexOf(3));     // 2 (First occurrence)
console.log(numbers.lastIndexOf(4)); // 5 (Last occurrence)
console.log(numbers.includes(3));    // [NEW] true (Checks value existence)

// Concatenation & Slicing (Non-Mutative)
const newArr = numbers.concat(['hello', 'world']); 
console.log(numbers.slice(1, 4));    // [NEW] [2, 3, 4] (Extracts elements from index 1 to 3)

// String Conversion
console.log(numbers.join(', '));     // "1, 2, 3, 4, 3, 4"


// ==========================================
// 3. ITERATION METHODS
// ==========================================

const list = [10, 20, 30];

// Standard For Loop
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

// For...of Loop
for (const value of list) {
  console.log(value);
}

// forEach (With context binding)
list.forEach(function (value, index) {
  console.log(value, index, this.name);
}, { name: 'ContextObject' });


// ==========================================
// 4. TRANSFORMATION & FILTERING
// ==========================================

const data = [1, 2, 3, 4, 5];

// Map: Transforms each item into a new array
const mappedArray = data.map(function (value, index) {
  return value + index + this.num;
}, { num: 10 });

// Filter: Returns new array of elements passing test condition
const filteredArray = data.filter(function (value) {
  return value > this.num;
}, { num: 2 }); // [3, 4, 5]

// Find: Returns the FIRST element matching condition
const foundElement = data.find(function (value) {
  return value > this.num;
}, { num: 2 }); // 3

// FindIndex: [NEW] Returns the index of the FIRST element matching condition
const foundIndex = data.findIndex(function (value) {
  return value > this.num;
}, { num: 2 }); // 2

// Every: Returns true if ALL elements pass condition
const allMatch = data.every(function (value) {
  return value > this.num;
}, { num: 0 }); // true

// Some: [NEW] Returns true if AT LEAST ONE element passes condition
const someMatch = data.some(function (value) {
  return value > 10;
}); // false


// ==========================================
// 5. REDUCTIONS
// ==========================================

const values = [1, 2, 3, 4];

// Reduce: Accumulate left-to-right
const sum = values.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // 10

// ReduceRight: Accumulate right-to-left
const diff = values.reduceRight(function (accumulator, currentValue) {
  console.log(currentValue); // Prints 3, 2, 1
  return accumulator - currentValue;
}); // 4 - 3 - 2 - 1 = -2

console.log('Sum:', sum);
console.log('Diff:', diff);


// ==========================================
// 6. IN-PLACE MODIFICATIONS & SORTING
// ==========================================

const arr5 = [5, 7, 8, 9, 19];

// Reversing Array in-place
arr5.reverse(); // [19, 9, 8, 7, 5]

// Splice: Remove/replace/insert elements in-place (index, removeCount, item1, item2...)
arr5.splice(1, 2, 'hello', 'world'); // [19, "hello", "world", 7, 5]

// Sorting
const numbersToSort = [19, 5, 8, 7, 9];

// Ascending Numerical Sort
numbersToSort.sort((a, b) => a - b); // [5, 7, 8, 9, 19]

// Descending Numerical Sort
numbersToSort.sort((a, b) => b - a); // [19, 9, 8, 7, 5]


// ==========================================
// 7. MODERN & UTILITY METHODS [NEW]
// ==========================================

// Array.from(): Create array from array-like or iterable objects
const chars = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']

// Array.of(): Create array from arguments
const items = Array.of(7, 8, 9); // [7, 8, 9]

// Flat: Flatten nested arrays
const nested = [1, [2, [3]]];
console.log(nested.flat(2)); // [1, 2, 3]

// FlatMap: Map then flatten 1 level
const doubledAndFlattened = [1, 2, 3].flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]

// Fill: Fill array elements with a static value
const emptyArr = new Array(5).fill(0); // [0, 0, 0, 0, 0]
