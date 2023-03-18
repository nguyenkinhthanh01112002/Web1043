// Lấy các phần tử cần sử dụng từ DOM
const display = document.querySelector('.display');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

let firstOperand = null;
let secondOperand = null;
let operator = null;

// Hàm thực hiện phép tính
function calculate() {
  let result = null;
  switch(operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
    default:
      break;
  }
  return result;
}

// Xử lý sự kiện khi nhấn vào nút số
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (operator === null) {
      if (firstOperand === null) {
        firstOperand = parseFloat(button.value);
      } else {
        firstOperand = parseFloat(firstOperand.toString() + button.value);
      }
      display.textContent = firstOperand;
    } else {
      if (secondOperand === null) {
        secondOperand = parseFloat(button.value);
      } else {
        secondOperand = parseFloat(secondOperand.toString() + button.value);
      }
      display.textContent = secondOperand;
    }
  });
});

// Xử lý sự kiện khi nhấn vào nút toán tử
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (firstOperand !== null && secondOperand !== null) {
      const result = calculate();
      firstOperand = result;
      secondOperand = null;
      display.textContent = result;
    }
    operator = button.value;
  });
});

// Xử lý sự kiện khi nhấn vào nút Clear
clearButton.addEventListener('click', () => {
  firstOperand = null;
  secondOperand = null;
  operator = null;
  display.textContent = '0';
});

// Xử lý sự kiện khi nhấn vào nút Equal
equalButton.addEventListener('click', () => {
  if (firstOperand !== null && secondOperand !== null) {
    const result = calculate();
    firstOperand = result;
    secondOperand = null;
    operator = null;
    display.textContent = result;
  }
});
