// ==========================================
// 1. ADDING & REMOVING EVENT LISTENERS
// ==========================================

const btn = document.querySelector('#action-btn');

function handleClick(event) {
  console.log('Button clicked!', event.target);
}

// Adding event listener (event type, callback, options)
btn.addEventListener('click', handleClick);

// Removing event listener (requires exact function reference; anonymous functions cannot be removed)
btn.removeEventListener('click', handleClick);

// Event listener with options
btn.addEventListener(
  'click',
  (e) => {
    console.log('Runs exactly once, then automatically removes itself.');
  },
  { once: true, passive: true } // passive: true improves scroll performance
);


// ==========================================
// 2. THE EVENT OBJECT & DEFAULT PREVENTION
// ==========================================

const form = document.querySelector('#login-form');
const link = document.querySelector('#external-link');

form.addEventListener('submit', (event) => {
  // Prevent default browser behavior (prevents page refresh on form submit)
  event.preventDefault();

  console.log('Target element (origin of event):', event.target);
  console.log('Current target (element holding listener):', event.currentTarget);
});

link.addEventListener('click', (event) => {
  event.preventDefault(); // Prevents navigating to the URL
  console.log('Link navigation intercepted.');
});


// ==========================================
// 3. EVENT PROPAGATION: CAPTURING & BUBBLING
// ==========================================

/*
  Event Flow Phases:
  1. Capturing Phase: Event trickles DOWN from window -> document -> parent -> target.
  2. Target Phase: Event reaches the target element.
  3. Bubbling Phase: Event bubbles UP from target -> parent -> document -> window.
*/

const outerDiv = document.querySelector('.outer');
const innerDiv = document.querySelector('.inner');

// Listening during the BUBBLING phase (default behavior: useCapture = false)
outerDiv.addEventListener('click', () => {
  console.log('Outer Div - Bubbling');
});

// Listening during the CAPTURING phase (useCapture = true)
outerDiv.addEventListener(
  'click',
  () => {
    console.log('Outer Div - Capturing');
  },
  true
);

innerDiv.addEventListener('click', (event) => {
  console.log('Inner Div Clicked');

  // Stops event from propagating to parent listeners
  event.stopPropagation();

  // Stops event propagation AND prevents other listeners on the SAME element from executing
  event.stopImmediatePropagation();
});


// ==========================================
// 4. EVENT DELEGATION (PERFORMANCE PATTERN)
// ==========================================

// Instead of attaching event listeners to individual <li> items,
// attach a single listener to the parent <ul> container.

const listParent = document.querySelector('#item-list');

listParent.addEventListener('click', (event) => {
  // Check if the clicked target matches the child selector
  const targetItem = event.target.closest('li.list-item');

  if (targetItem && listParent.contains(targetItem)) {
    console.log('Clicked Item Text:', targetItem.textContent);
    console.log('Clicked Item ID:', targetItem.dataset.id);
  }
});


// ==========================================
// 5. COMMON EVENT TYPES
// ==========================================

// Mouse Events
btn.addEventListener('mouseenter', () => console.log('Mouse hovered over'));
btn.addEventListener('mouseleave', () => console.log('Mouse left element'));

// Keyboard Events
document.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key} | Code: ${event.code}`);
  if (event.key === 'Escape') {
    console.log('Escape pressed: Closing modal...');
  }
});

// Input / Change Events
const searchInput = document.querySelector('#search');

searchInput.addEventListener('input', (event) => {
  console.log('Fires immediately on every keystroke:', event.target.value);
});

searchInput.addEventListener('change', (event) => {
  console.log('Fires when focus shifts after modification:', event.target.value);
});

// DOM Life-cycle Events
document.addEventListener('DOMContentLoaded', () => {
  console.log('HTML constructed and DOM tree fully built (ready for manipulation).');
});

window.addEventListener('load', () => {
  console.log('Entire page loaded including images, stylesheets, and scripts.');
});


// ==========================================
// 6. CUSTOM EVENTS (PUBSUB / EMITTER PATTERN)
// ==========================================

// Dispatching a custom event with custom data attached
function notifyUserLogin(user) {
  const customEvent = new CustomEvent('userLogin', {
    detail: { username: user.name, timestamp: Date.now() },
    bubbles: true,     // Allows event to bubble up DOM tree
    cancelable: true   // Allows event.preventDefault()
  });

  document.dispatchEvent(customEvent);
}

// Subscribing to custom events
document.addEventListener('userLogin', (event) => {
  console.log('Custom Event Received:', event.detail.username);
});

// Trigger event execution
notifyUserLogin({ name: 'Yunus' });
