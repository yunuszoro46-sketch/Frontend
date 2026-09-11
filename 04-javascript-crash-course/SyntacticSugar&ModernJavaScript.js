// ==========================================
// 1. EQUALITY & TYPE CHECKING
// ==========================================

// Loose Equality (==): Performs implicit type coercion
console.log(5 == '5');  // true

// Strict Equality (===): Checks both type and value (Best Practice)
console.log(5 === '5'); // false


// ==========================================
// 2. DESTRUCTURING ASSIGNMENT
// ==========================================

// Array Destructuring & Rest Syntax
const arr = [1, 2, 3, 4];
const [first, second, ...rest] = arr;

console.log(first, second); // 1 2
console.log(rest);          // [3, 4]

// Object Destructuring with Property Renaming
const person = {
  name: 'Yunus',
  ide: 'WebStorm'
};

const { name: firstName } = person;
console.log(firstName);     // "Yunus"

// Parameter Destructuring in Functions
function printName({ name }) {
  console.log(name);
}
printName(person);          // "Yunus"


// ==========================================
// 3. SPREAD OPERATOR & REST PARAMETERS
// ==========================================

// Combining Arrays with Spread (...)
const arr2 = [5, 6, 7, 8];
const arr3 = [1, 2, 3, 4];
const combined = [0, ...arr2, 4.5, ...arr3];

console.log(combined); // [0, 5, 6, 7, 8, 4.5, 1, 2, 3, 4]

// Rest Parameters in Functions
function logParams(x, ...rest) {
  console.log('First parameter:', x);
  console.log('Rest parameters array:', rest);
}
logParams(1, 2, 3, 4); // x: 1, rest: [2, 3, 4]


// ==========================================
// 4. ARROW FUNCTIONS & IMPLICIT RETURNS
// ==========================================

// Standard Function Expression
const doubled = arr.map(function double(num) {
  return num * 2;
});

// Arrow Function with Explicit Return
const half = arr.map((num) => {
  return num / 2;
});

// Arrow Function with Implicit Return (Shorthand)
const quad = arr.map((num) => num * 4);


// ==========================================
// 5. SHORT-CIRCUIT EVALUATION & LOGICAL OPERATORS
// ==========================================

// Logical OR (||): Returns first truthy value or last falsy value
// Falsy values: false, 0, "", null, undefined, NaN
const username = '' || 'Default User';
console.log(username); // "Default User" (empty string '' is falsy)

// Logical AND (&&): Returns first falsy value, or executes right side if left is truthy
const isLoggedIn = true;
isLoggedIn && console.log('User is logged in!'); // Executes output

// Nullish Coalescing (??): Returns right side ONLY if left is null or undefined
// Keeps valid falsy values like 0 or '' intact
const sub = 'calculus';
const defaultName = sub ?? 'Default Subject';
console.log(defaultName); // "calculus"

const score = 0;
console.log(score || 100); // 100 (0 is falsy, so it picks 100)
console.log(score ?? 100); // 0 (0 is not null/undefined, so it keeps 0)


// ==========================================
// 6. MODERN SYNTAX EXTENSIONS [NEW]
// ==========================================

// Template Literals
console.log(`Hello ${sub.trim()} result: ${1 + 1}`);

// Optional Chaining (?.): Prevents runtime crashes when accessing nested undefined props
const user = { profile: { details: { age: 22 } } };
console.log(user?.profile?.details?.age); // 22
console.log(user?.address?.city);         // undefined (No TypeError thrown)

// Property Shorthand & Computed Property Names
const course = 'Computer Science';
const dynamicKey = 'status';

const student = {
  course,                      // Equivalent to course: course
  [dynamicKey]: 'Active',      // Computed key "status"
  study() {                    // Method shorthand
    console.log(`Studying ${this.course}`);
  }
};

// Logical Assignment Operators
let activeUser = null;
activeUser ??= 'Guest';        // Assigns 'Guest' because activeUser is null
console.log(activeUser);       // "Guest"
