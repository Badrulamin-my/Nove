const outputDisplay = document.getElementById('output-value');
const historyDisplay = document.getElementById('history-value');
const numberButtons = document.getElementsByClassName('number');
const operatorButtons = document.getElementsByClassName('operator');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const equalsButton = document.getElementById('=');

let currentValue = '';
let previousValue = '';
let currentOperator = '';

function appendNumber(number) {
    if (currentValue === '0') {
        currentValue = number;
    } else if (currentValue.length <= 16) {
        currentValue += number;
    }
    outputDisplay.innerHTML = currentValue;
}

for (let btn of numberButtons) {
    btn.addEventListener('click', () => {
        appendNumber(btn.innerHTML);
    });
}

function chooseOperator(operator) {
    if (currentValue === '') return;
    if (previousValue !== '') {
        compute();
    }
    currentOperator = operator;
    previousValue = currentValue;
    currentValue = '';
    historyDisplay.innerHTML = `${previousValue} ${currentOperator}`;
}

for (let btn of operatorButtons) {
    btn.addEventListener('click', () => {
        chooseOperator(btn.innerHTML);
    });
}

function compute() {
    let computation;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    if (isNaN(prev) || isNaN(current)) return;
    switch (currentOperator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '×':
            computation = prev * current;
            break;
        case '÷':
            computation = prev / current;
            break;
        case '%':
            computation = prev % current;
            break;
        default:
            return;
    }
    currentValue = computation;
    currentOperator = undefined;
    previousValue = '';
    outputDisplay.innerHTML = currentValue;
    historyDisplay.innerHTML = '';
}

equalsButton.addEventListener('click', () => {
    compute();
});

clearButton.addEventListener('click', () => {
    outputDisplay.innerHTML = '';
    currentValue = '';
    previousValue = '';
    currentOperator = '';
    historyDisplay.innerHTML = '';
});

backspaceButton.addEventListener('click', () => {
    currentValue = currentValue.toString().slice(0, -1);
    outputDisplay.innerHTML = currentValue;
});
