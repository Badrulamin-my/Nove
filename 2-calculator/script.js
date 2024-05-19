let output = document.getElementById('output-value');

let value = '';

document.getElementById('1').addEventListener('click', function () {
    value += '1';
    output.innerHTML = value;
});

document.getElementById('2').addEventListener('click', function () {
    value += '2';
    output.innerHTML = value;
});

document.getElementById('3').addEventListener('click', function () {
    value += '3';
    output.innerHTML = value;
});

document.getElementById('4').addEventListener('click', function () {
    value += '4';
    output.innerHTML = value;
});

document.getElementById('5').addEventListener('click', function () {
    value += '5';
    output.innerHTML = value;
});

document.getElementById('6').addEventListener('click', function () {
    value += '6';
    output.innerHTML = value;
});

document.getElementById('7').addEventListener('click', function () {
    value += '7';
    output.innerHTML = value;
});

document.getElementById('8').addEventListener('click', function () {
    value += '8';
    output.innerHTML = value;
});

document.getElementById('9').addEventListener('click', function () {
    value += '9';
    output.innerHTML = value;
});

document.getElementById('0').addEventListener('click', function () {
    value += '0';
    output.innerHTML = value;
});

document.getElementById('clear').addEventListener('click', function () {
    output.innerHTML = '';
});
