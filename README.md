# Quiz Mania

A dynamic, state-driven quiz application built using vanilla HTML5, CSS3, and modern JavaScript. It features a custom 15-second countdown timer, dynamic DOM manipulation, and real-time score tracking.

This is **Project 3 of 5** in my frontend fundamentals series before transitioning to React and full-stack development with the MERN stack.

---

## Live Demo
Check out the live deployment here:  
**[Live Demo](https://yashupatel007.github.io/quiz-mania/)**

---

## Features
- **Centralized Data Structure:** All questions, options, and answers are stored in a single JavaScript array, allowing for infinitely scalable quizzes without altering the HTML structure.
- **Dynamic DOM Injection:** Option buttons are wiped and rebuilt dynamically for every question to maintain a clean rendering cycle.
- **Countdown Engine:** A custom 15-second background timer (`setInterval`) that automatically routes the user if time expires, featuring strict interval cleanup (`clearInterval`) to prevent memory leaks.
- **State Management:** Tracks the user's progress index, accumulated score, and remaining time entirely in memory without page reloads.
- **Instant Visual Feedback:** Color-coded UI updates (green for correct, red for incorrect) and automatic attribute locking (`:disabled`) to prevent double-voting.
- **Smooth UX:** Includes a dedicated Start Screen, final score Result Screen, and CSS keyframe animations for seamless visual transitions.

---

## Technologies Used
- **HTML5:** Semantic document structuring and active/hidden view containers.
- **CSS3:** Flexbox layout, custom gradients, interactive hover states, and keyframe animations (`@keyframes`).
- **JavaScript (ES6+):** 
  - Dynamic element creation (`document.createElement`).
  - Event loop management (`setTimeout`, `setInterval`).
  - Array iteration (`forEach`).
  - Closure-based event listeners.

---

## Project Structure
```text
quiz-mania/
├── index.html
├── style.css
├── script.js
└── README.md
