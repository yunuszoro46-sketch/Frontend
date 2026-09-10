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

* # Comprehensive JavaScript Mastery Guide

A complete reference guide covering JavaScript fundamentals, modern syntax, asynchronous programming, browser APIs, design patterns, and advanced runtime architecture.

---

## Table of Contents
1. [JavaScript Basics](#1-javascript-basics)
2. [Variables and Scoping](#2-variables-and-scoping)
3. [Arrays](#3-arrays)
4. [Objects](#4-objects)
5. [Equality and Type Coercion](#5-equality-and-type-coercion)
6. [Syntactic Sugar and Modern JavaScript](#6-syntactic-sugar-and-modern-javascript)
7. [Connecting JavaScript to HTML](#7-connecting-javascript-to-html)
8. [DOM Manipulation](#8-dom-manipulation)
9. [Event-Driven Programming](#9-event-driven-programming)
10. [Promises](#10-promises)
11. [Working with the Server](#11-working-with-the-server)
12. [Timers and Intervals](#12-timers-and-intervals)
13. [Closures](#13-closures)
14. [This](#14-this)
15. [Classes](#15-classes)
16. [Currying](#16-currying)
17. [Generators](#17-generators)
18. [Modules](#18-modules)
19. [The Event Loop](#19-the-event-loop)
20. [Web Workers](#20-web-workers)
21. [Browser Storage](#21-browser-storage)
22. [Data Structures with JavaScript](#22-data-structures-with-javascript)
23. [JavaScript Frameworks](#23-javascript-frameworks)
24. [TypeScript](#24-typescript)
25. [Debugging Strategies](#25-debugging-strategies)
26. [Writing Clean JavaScript](#26-writing-clean-javascript)

---

## 1. JavaScript Basics
JavaScript is a high-level, single-threaded, dynamically typed, interpreted or JIT-compiled programming language.

* **Primitives**: `number`, `string`, `boolean`, `undefined`, `null`, `symbol`, `bigint`.
* **Non-Primitives**: `Object` (includes Arrays, Functions, Dates, etc.).
* **Dynamic Typing**: Variables hold values, not types. Types can change at runtime.

