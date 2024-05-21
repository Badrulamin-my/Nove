// Homework 3: Do you love me? [2]

// Requirements
// there should be 2 stages to this homework

// Stage 1:
// 1- move 'NO' button to a random location on the screen when havering overit with the mouse or when clicking
// 2- show an alert to the user when clicking "YES" button with the message "I love you too!!"
// 3- after certen number of times the 'NO' button should be positioned above the 'YES' button and we start stage 2

// Stage 2:
// 1- when hovering over the 'NO' button the button should go below the 'YES' button with 200 ms delay
// 2- show an alert to the user when clicking "YES" button with the message "I love you too!!"

// Dont edit the .html or .css files

// ##########################################
// write your code here 
document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');
    let hoverCount = 0;

    noButton.addEventListener('mouseover', function() {
        setTimeout(moveButton, 200);
    });
    noButton.addEventListener('click', clickButton);

    function moveButton() {
        hoverCount++;
        if (hoverCount >= 3) {
            const yesButtonRect = yesButton.getBoundingClientRect();
            noButton.style.position = 'absolute';
            noButton.style.left = `${yesButtonRect.left}px`;
            noButton.style.top = `${yesButtonRect.top - 15}px`;
            noButton.style.zIndex = '-1'; // Move behind the yes-button
        } else {
            const x = Math.random() * (window.innerWidth - noButton.clientWidth);
            const y = Math.random() * (window.innerHeight - noButton.clientHeight);
            noButton.style.position = 'absolute';
            noButton.style.left = `${x}px`;
            noButton.style.top = `${y}px`;
        }
    }

    function clickButton() {
        if (hoverCount >= 3) {
            const yesButtonRect = yesButton.getBoundingClientRect();
            noButton.style.top = `${yesButtonRect.top + 8}px`; // Move down
        } else {
            moveButton();
        }
    }

    yesButton.addEventListener('click', function() {
        alert('I love you too!!');
    });
});
