
let displayValue = '';
let operator = '';
let firstValue = '';

function appendNumber(number) {
    displayValue += number;
    document.getElementById("display").value = displayValue;
}

function setOperation(op) {
    if (displayValue === '') return;
    firstValue = displayValue;
    operator = op;
    displayValue = '';
}

function calculate() {
    let secondValue = displayValue;
    let result;
    if (operator === '+') {
        result = parseFloat(firstValue) + parseFloat(secondValue);
    } else if (operator === '-') {
        result = parseFloat(firstValue) - parseFloat(secondValue);
    } else if (operator === '*') {
        result = parseFloat(firstValue) * parseFloat(secondValue);
    } else if (operator === '/') {
        result = parseFloat(firstValue) / parseFloat(secondValue);
    }
    displayValue = result.toString();
    document.getElementById("display").value = displayValue;
    operator = '';
    firstValue = '';
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    firstValue = '';
    document.getElementById("display").value = '';
}
