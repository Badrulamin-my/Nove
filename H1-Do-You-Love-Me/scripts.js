// Homework 1 (web development with JavaScript)

// Requirments
// 1- move 'NO' button to a random location on the screen when havering overit with the mouse or when clicking
// 2- show an alert to the user when clicking "YES" button with the message "I love you too!!"

// Dont edit the .html or .css files

// ##########################################
// write your code here

document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('no-button');
    let hoverCount = 0;
    noButton.addEventListener('mouseover', moveButton);
    noButton.addEventListener('click', moveButton);

    function moveButton() {
        hoverCount++;
                if (hoverCount >= 6) {
                    // Move the no-button behind the yes-button
                    const yesButton = document.getElementById('yes-button');
                    const yesButtonRect = yesButton.getBoundingClientRect();
                    noButton.style.position = 'absolute';
                    noButton.style.left = `${yesButtonRect.left + 10}px`;//for offset
                    noButton.style.top = `${yesButtonRect.top + 10}px`; //for offset
                    noButton.style.zIndex = '-1'; // Ensure the no-button is behind
                } else {
                    const x = Math.random() * (window.innerWidth - noButton.clientWidth); //generates a random floating-point number
                    const y = Math.random() * (window.innerHeight - noButton.clientHeight);
                    noButton.style.position = 'absolute';
                    noButton.style.left = `${x}px`;
                    noButton.style.top = `${y}px`;
                }
            }

    const yesButton = document.getElementById('yes-button');
    yesButton.addEventListener('click', function() {
        alert('I love you too!!');
    });
});
