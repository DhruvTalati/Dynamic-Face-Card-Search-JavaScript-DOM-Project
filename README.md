# Dynamic Profile Cards with Live Search

A responsive web application that dynamically generates **user profile cards** and allows users to **search and filter profiles in real time** using JavaScript DOM manipulation.

This project was built to practice **DOM manipulation, dynamic rendering, and live search filtering** using **Vanilla JavaScript**.

---
## Screenshots

<p align="center">
  <img src="UI%20OF%20THE%20WEBSITE.png" width="45%">
  <img src="SERACH%20FILTERS.png" width="45%">
</p>
---

## Project Overview

The application displays multiple **profile cards** containing:

- Profile image
- User name
- Short bio

Users can type in the search bar to **instantly filter the cards** based on the entered text.

---

## Features

- Dynamic card generation using JavaScript
- Real-time search filtering
- Responsive card layout
- Clean and modern UI
- Efficient DOM updates
- Interactive user interface

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- DOM Manipulation

---

## How It Works

1. User profile data is stored inside a **JavaScript array of objects**.
2. JavaScript dynamically generates cards using **createElement()**.
3. Cards are inserted into the DOM.
4. When the user types in the search input:
   - An **input event** is triggered
   - The users array is filtered using **.includes()**
   - Matching cards are re-rendered on the screen.

---

## Project Structure

```
project-folder
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Learning Objectives

This project helped in understanding:

- JavaScript DOM manipulation
- Event handling
- Dynamic UI rendering
- Array filtering
- Interactive UI development

These concepts are important before learning frameworks like **React**.

---

## Future Improvements

- Add animations when cards appear
- Add profile detail popup
- Implement debounce search
- Store user data using localStorage
- Convert the project into a React application

---

## Author

**Dhruv Talati**
