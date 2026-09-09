# JavaScript Key Terms & Concepts

A foundational guide covering basic paradigms, primitives, and dynamic typing concepts in JavaScript.

## 📌 Overview

JavaScript is the primary programming language of the web, designed for adding interactive functionality to websites. It is a general-purpose, multi-paradigm programming language featuring dynamic typing.

---

## 💡 Programming Paradigms in JavaScript

JavaScript supports multiple programming styles (paradigms):

* **Event-driven:** Functions react to events (e.g., clicks, scrolls, or emitted signals).
* **Functional:** Uses pure functions (no side effects) and supports **first-class functions** and **higher-order functions** (treating functions as standard values passed to or returned from other functions).
* **Object-oriented:** Data structures are built as objects that can hold state and inherit properties/methods from one another.
* **Imperative:** Describes program execution flow explicitly using loops, conditionals, and manual state mutations.
* **Declarative:** Focuses on describing the desired outcome rather than explicit control flow (e.g., using `forEach`, `map`, or `filter`).

---

## 🔹 Primitive Data Types

JavaScript contains 7 primitive data types representing single immutable values:

| Type | Description |
| :--- | :--- |
| **Number** | Numeric values, including integers and floats. |
| **BigInt** | Integers larger than the safe integer limit for `Number`. |
| **Boolean** | Logical values: `true` or `false`. |
| **String** | Sequence of characters. |
| **Symbol** | Unique, dynamically generated identifier. |
| **Null** | Represents an intentional absence of value. |
| **Undefined** | Represents a variable that has been declared but not assigned a value. |

### The `typeof` Operator

JavaScript provides the `typeof` operator to check the lower-case type string of a value. Note that `typeof function` returns `"function"`, even though functions are technically objects under the hood.

---

## 📖 Resources

* [MDN Web Docs: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [MDN Web Docs: Primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
