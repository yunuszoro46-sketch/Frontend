// ==========================================
// 1. OBJECT LITERALS & PROPERTY MANIPULATION
// ==========================================

const myKey = 'key';

const basicInfo = {
  name: 'Yunus Been Hashem',
  githubrepo: 'frontend',
  currentlyLearning: 'javaScript',
  goal: 'to learn system design',
  stars: 7,
  isAwesome: false,
  [myKey]: 1234, // Computed property key

  // Method shorthand
  sayHello() {
    console.log('Hello World!');
  },

  // Getter & Setter
  get rating() {
    return this.stars;
  },
  set rating(stars) {
    this.stars = stars;
  }
};

// Using Getter and Setter
basicInfo.rating = 6; // Calls the setter
console.log('Rating via getter:', basicInfo.rating); // 6

// Property Checks & Access
console.log('name' in basicInfo);                       // true (checks object & prototype chain)
console.log(basicInfo.hasOwnProperty('githubrepo'));    // true (checks only own property)
console.log(basicInfo.currentlyLearning);               // "javaScript"
console.log(basicInfo[myKey]);                          // 1234

// Property Mutation & Deletion
basicInfo.githubrepo = 'FrontEndExpert';
delete basicInfo.stars;                                 // Deletes the property from the object
console.log(basicInfo);


// ==========================================
// 2. CONSTRUCTORS & CREATION PATTERNS
// ==========================================

// Constructor Function
function BasicInfo(name, githubrepo, currentlyLearning) {
  this.name = name;
  this.githubrepo = githubrepo;
  this.currentlyLearning = currentlyLearning;
}

const frontEndExpert = new BasicInfo('FrontEndExpert', 'javaScript', 'https://github.com/FrontEndExpert');
console.log(frontEndExpert);


// ==========================================
// 3. SYMBOLS AS KEYS
// ==========================================

const id = Symbol('id');            // Unique local symbol
const id2 = Symbol.for('id');       // Global symbol registry lookup
const id3 = Symbol.for('id3');

console.log(id === id3);            // false

const obj6 = {
  [id]: 1234,                       // Symbol property
  [id2]: 0,                         // Symbol property
  id: 'hello',                      // Standard string property "id"
  id: 'world'                       // Overwrites standard string property "id"
};

console.log(obj6);                  // Output: { id: 'world', [Symbol(id)]: 1234, [Symbol(id)]: 0 }


// ==========================================
// 4. PROTOTYPES & ITERATION
// ==========================================

const website = {
  name: 'AlgoExpert',
  rating: 5,
  founders: ['clement', 'antoine']
};

// Object inheriting from 'website' via prototype
const abj = {
  __proto__: website,
  ownProp: 'I belong directly to abj'
};

// Object.entries / Object.keys / Object.values (Iterates ONLY OWN enumerable properties)
Object.entries(abj).forEach(function ([key, value]) {
  console.log(key, value);          // Logs only: "ownProp I belong directly to abj"
});

// Inherited properties accessible via prototype lookup
console.log(abj.name);              // "AlgoExpert"
console.log(abj.rating);            // 5

// for...in loop (Iterates over OWN and INHERITED enumerable properties)
for (const key in abj) {
  console.log('for...in key:', key); // Logs: "ownProp", "name", "rating", "founders"
}


// ==========================================
// 5. IMMUTABILITY: FREEZE VS SEAL [NEW]
// ==========================================

// --- Object.seal() ---
// Prevents adding/deleting properties, but EXISTING writable properties CAN be changed.
const sealedObj = { name: 'Yunus', age: 25 };
Object.seal(sealedObj);

sealedObj.age = 26;                 // Allowed: Modifying existing property
delete sealedObj.name;              // Silently fails (or throws Error in strict mode)
sealedObj.newProp = 'test';         // Silently fails

console.log('Sealed:', sealedObj);  // { name: 'Yunus', age: 26 }
console.log('Is Sealed?', Object.isSealed(sealedObj)); // true


// --- Object.freeze() ---
// Completely locks object. CANNOT add, delete, or re-assign any properties.
const frozenObj = { role: 'Developer', level: 1 };
Object.freeze(frozenObj);

frozenObj.level = 2;                // Silently fails
frozenObj.newProp = 'test';         // Silently fails
delete frozenObj.role;              // Silently fails

console.log('Frozen:', frozenObj);  // { role: 'Developer', level: 1 }
console.log('Is Frozen?', Object.isFrozen(frozenObj)); // true


// ==========================================
// 6. OBJECT TO PRIMITIVE CONVERSION [NEW]
// ==========================================

// JavaScript calls internal coercion algorithms when objects encounter mathematical operators, string concatenation, or explicit conversion.

const userWallet = {
  money: 500,
  name: 'Yunus',

  // Modern method: Preferred explicit engine coercion handler
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.money;
    }
    if (hint === 'string') {
      return `User ${this.name}`;
    }
    // hint === 'default' (e.g., using '+' operator)
    return this.money;
  },

  // Fallback 1: Called during numerical conversion if Symbol.toPrimitive is absent
  valueOf() {
    return this.money;
  },

  // Fallback 2: Called during string conversion if Symbol.toPrimitive is absent
  toString() {
    return this.name;
  }
};

console.log(+userWallet);           // 500 (Number hint)
console.log(`${userWallet}`);       // "User Yunus" (String hint)
console.log(userWallet + 100);      // 600 (Default hint)


// ==========================================
// 7. OBJECT COPYING TECHNIQUES [NEW]
// ==========================================

const original = { a: 1, nested: { b: 2 } };

// Shallow Copy 1: Object.assign
const shallowCopy1 = Object.assign({}, original);

// Shallow Copy 2: Spread Operator
const shallowCopy2 = { ...original };

// Deep Copy: Modern Native Method (ES2022)
const deepCopy = structuredClone(original);
deepCopy.nested.b = 99;

console.log(original.nested.b);     // 2 (Unchanged because deepCopy was cloned completely)
