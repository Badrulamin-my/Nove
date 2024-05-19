// Homework 2: Counter

// Requirements
// 1- + button should increase the counter by 1
// 2- - button should decrease the counter by 1
// 3- reset button should reset the counter to 0
// 4- counter should start with 0
// 5- counter should not go below 0
// 6- counter should not go above 99
// 7- we should be able to change the counter value by typing in the input field


// ##########################################
/* Get references to DOM elements */
const incrementButton = document.querySelector('.button-increment');
const decrementButton = document.querySelector('.button-decrement');
const resetButton = document.querySelector('.button-reset');
const numberInput = document.querySelector('.number-input');

/* Function to update the counter value */
function updateCounter(newValue) {
    if (newValue < 0) {
        newValue = 0;
    } else if (newValue > 99) {
        newValue = 99;
    }
    numberInput.value = newValue;
}

/* Event listeners for the buttons and input field*/
incrementButton.addEventListener('click', () => {
    let currentValue = parseInt(numberInput.value);
    updateCounter(currentValue + 1);
});

decrementButton.addEventListener('click', () => {
    let currentValue = parseInt(numberInput.value);
    updateCounter(currentValue - 1);
});

resetButton.addEventListener('click', () => {
    updateCounter(0);
});

numberInput.addEventListener('input', (event) => {
    let newValue = parseInt(event.target.value);
    if (isNaN(newValue)) {
        newValue = 0;
    }
    updateCounter(newValue);
});
