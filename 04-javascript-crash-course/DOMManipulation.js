// ==========================================
// 1. QUERYING & SELECTING ELEMENTS
// ==========================================

// Modern Recommended Selectors (CSS Selector syntax)
const singleEl = document.querySelector('.card');             // Returns first matching Element or null
const multiEls = document.querySelectorAll('button.btn-active'); // Returns static NodeList

// Traditional Selectors (Faster in legacy performance benchmarks)
const elById = document.getElementById('submit-btn');          // Returns Element or null
const elsByClass = document.getElementsByClassName('item');   // Returns live HTMLCollection
const elsByTag = document.getElementsByTagName('div');        // Returns live HTMLCollection


// ==========================================
// 2. CREATING & INSERTING ELEMENTS
// ==========================================

// Creating elements and text
const newCard = document.createElement('div');
const heading = document.createElement('h2');
heading.textContent = 'Card Title';                           // Safe: Prevents XSS script execution

// Building hierarchy
newCard.appendChild(heading);                                 // Appends to end of node

// Flexible Insertion Methods (Modern standard)
const container = document.querySelector('#main-container');

container.append(newCard);                                    // Appends Node or string
container.prepend('Header Text', newCard);                   // Inserts at the beginning of element

// Insert adjacent relative positions
// Positions: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
container.insertAdjacentHTML('beforeend', '<p class="desc">Dynamic Paragraph</p>');


// ==========================================
// 3. REMOVING & REPLACING ELEMENTS
// ==========================================

const itemToRemove = document.querySelector('.old-item');

if (itemToRemove) {
  itemToRemove.remove();                                     // Modern element self-removal
}

// Parent-based replacement
const parent = document.querySelector('.list');
const oldChild = parent.firstElementChild;
const replacement = document.createElement('li');
replacement.textContent = 'Replaced Item';

if (oldChild) {
  parent.replaceChild(replacement, oldChild);                // Swaps nodes
}


// ==========================================
// 4. ATTRIBUTES & DATASET (CUSTOM ATTRIBUTES)
// ==========================================

const link = document.querySelector('a.external-link');

// Standard Attribute Operations
link.setAttribute('href', 'https://github.com');
console.log(link.getAttribute('href'));                      // "https://github.com"
console.log(link.hasAttribute('disabled'));                  // false
link.removeAttribute('target');

// Dataset API (HTML data-* attributes)
// HTML: <div id="user" data-user-id="101" data-role="admin"></div>
const userCard = document.querySelector('#user');

console.log(userCard.dataset.userId);                        // Accesses data-user-id -> "101"
userCard.dataset.role = 'super-admin';                       // Updates data-role attribute


// ==========================================
// 5. STYLES & CLASSLIST MANIPULATION
// ==========================================

const box = document.querySelector('.box');

// ClassList API (Best practice for styling)
box.classList.add('active', 'highlight');
box.classList.remove('highlight');
box.classList.toggle('hidden');                             // Toggles presence
box.classList.replace('active', 'inactive');
console.log(box.classList.contains('inactive'));             // true

// Direct Inline Style Manipulation (Overrides CSS rules)
box.style.backgroundColor = '#23272f';                       // CamelCase syntax for CSS props
box.style.padding = '16px';
box.style.display = 'flex';

// Reading computed CSS values applied by stylesheets
const computedStyles = window.getComputedStyle(box);
console.log(computedStyles.getPropertyValue('margin-top'));


// ==========================================
// 6. DOM TRAVERSAL (NAVIGATING THE TREE)
// ==========================================

const currentItem = document.querySelector('li.active');

// Parent Traversal
console.log(currentItem.parentElement);                      // Direct parent Element
console.log(currentItem.closest('.card-wrapper'));           // Closest ancestor matching selector

// Sibling Traversal (Ignores whitespace text nodes)
console.log(currentItem.previousElementSibling);             // Preceding sibling element
console.log(currentItem.nextElementSibling);                 // Following sibling element

// Child Traversal
const listParent = document.querySelector('ul.list');
console.log(listParent.children);                             // Live HTMLCollection of child elements
console.log(listParent.firstElementChild);                   // First element child
console.log(listParent.lastElementChild);                    // Last element child


// ==========================================
// 7. HIGH-PERFORMANCE MANIPULATION (FRAGMENTS)
// ==========================================

// DocumentFragment: In-memory container that prevents multiple layout reflows/repaints
const fragment = document.createDocumentFragment();
const itemsToInsert = ['Item A', 'Item B', 'Item C', 'Item D'];

itemsToInsert.forEach((text) => {
  const li = document.createElement('li');
  li.textContent = text;
  fragment.appendChild(li);                                  // Append to memory container
});

// Single DOM insertion operation
document.querySelector('#app-list').appendChild(fragment);
