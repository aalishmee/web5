# Assignment 5 - Personal Profile & DOM Manipulation
Name: Alish Medina  
Group: SE-2538

## Overview
This project demonstrates JavaScript fundamentals, including objects, arithmetic operations, form events, and DOM manipulation. It contains three parts: creating a data object, handling form inputs to update that object, and dynamically adding/removing items from a list. The design uses plain HTML and CSS.

### Task 1 & 2: Personal Info Object & Calculations
Created a JavaScript `const` object named `userProfile` that stores a string, number, boolean, and an array. I wrote a function to dynamically calculate the user's current age using the current year minus the `birthYear`. It also calculates the total number of hobbies using `.length`. These values are displayed on the page.
<img width="1419" height="801" alt="Снимок экрана 2026-10-25 215244" src="https://github.com/user-attachments/assets/3d008dbb-5a35-45db-b147-b811338cad33" />
<img width="1380" height="812" alt="Снимок экрана 2026-10-25 215300" src="https://github.com/user-attachments/assets/5256c340-008c-4d62-9dff-089ed63105e9" />
<img width="1411" height="850" alt="Снимок экрана 2026-10-25 220035" src="https://github.com/user-attachments/assets/2d6fec75-3c0a-4086-9dfa-3cbebdff2696" />

### Task 3 & 4: HTML Form & Event Listener
Built a simple form with inputs for Username and Birth Year. I added a `submit` event listener to the form. When clicked, it captures the input values, updates the `userProfile` object, and refreshes the display. I used `event.preventDefault()` to stop the page from reloading. I also added validation to prevent empty names or invalid birth years.
<img width="1380" height="812" alt="Снимок экрана 2026-10-25 215300" src="https://github.com/user-attachments/assets/460268d8-81f0-4c86-ae0d-b5d097f27cf5" />
<img width="1411" height="850" alt="Снимок экрана 2026-10-25 220035" src="https://github.com/user-attachments/assets/3d069182-2c99-4e6b-8845-f11f234b6325" />
<img width="1405" height="841" alt="Снимок экрана 2026-10-25 220041" src="https://github.com/user-attachments/assets/f1109264-1455-4c06-b6c3-10568c8dbdfe" />

### Task 5: DOM List Manipulation
Created an unordered list (`<ul>`) to display hobbies. I added two buttons:
- **Add Item:** Takes the text from the input field, pushes it to the array, and creates a new `<li>` element on the page.
- **Remove Item:** Uses the `.pop()` method to remove the last item from the array and updates the DOM.
<img width="1405" height="841" alt="Снимок экрана 2026-10-25 220041" src="https://github.com/user-attachments/assets/1e1b494c-b15d-4c6e-88ae-8518aa0ca099" />

## Summary
I built a single-page profile application. The most interesting parts were:

- Understanding the difference between the object data and the DOM. The `userProfile` object is the "source of truth", and the HTML just displays it. When I add a hobby, I first update the array, then re-render the list.
- Using `event.preventDefault()` on the form - without it, the page would refresh and my JavaScript changes would disappear instantly.
- Using `innerHTML = ""` before rendering the hobby list so I don't get duplicate items on the screen every time I click "Add Item".
- Adding `.trim()` to the input values so users can't submit blank spaces as a hobby.

The page is responsive, styled cleanly, and all buttons work without errors.

## How to Run
- Clone the repository
- Open `index.html` in any modern browser
- No installation needed

## Files
- `index.html` - the webpage structure
- `style.css` - custom styling
- `script.js` - all JavaScript logic
- `screenshots/` - screenshots for each task
