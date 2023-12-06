let firstNumber = '';
let operator = '';
let secondNumber = '';
let displayValue = '0';

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue;
}

function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function setOperator(op) {
  operator = op;
  firstNumber = displayValue;
  displayValue = '0';
  updateDisplay();
}

function addDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

function clearDisplay() {
  firstNumber = '';
  operator = '';
  secondNumber = '';
  displayValue = '0';
  updateDisplay();
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  if (displayValue === '') {
    displayValue = '0';
  }
  updateDisplay();
}

function calculate() {
  if (operator && firstNumber !== '' && displayValue !== '') {
    secondNumber = displayValue;
    switch (operator) {
      case '+':
        displayValue = (parseFloat(firstNumber) + parseFloat(secondNumber)).toString();
        break;
      case '-':
        displayValue = (parseFloat(firstNumber) - parseFloat(secondNumber)).toString();
        break;
      case '*':
        displayValue = (parseFloat(firstNumber) * parseFloat(secondNumber)).toString();
        break;
      case '/':
        if (parseFloat(secondNumber) === 0) {
          displayValue = 'Error';
        } else {
          displayValue = (parseFloat(firstNumber) / parseFloat(secondNumber)).toString();
        }
        break;
    }
    firstNumber = '';
    operator = '';
    secondNumber = '';
    updateDisplay();
  }
}

// Keyboard support
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (!isNaN(key) || key === '.') {
    appendNumber(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    setOperator(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    backspace();
  }
});
