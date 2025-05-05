function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
  return firstNum / secondNum;
}

function operate(firstNum, secondNum, operator) {
  // Check for division by zero
  if (operator === "/" && secondNum === 0) {
    return "Error: Division by zero";
  }

  let result;
  switch (operator) {
    case "+":
      result = firstNum + secondNum;
      break;
    case "-":
      result = firstNum - secondNum;
      break;
    case "*":
      result = firstNum * secondNum;
      break;
    case "/":
      result = firstNum / secondNum;
      break;
  }

  // Check if result is too large
  if (Math.abs(result) > 1e15) {
    return "Error: Number too large";
  }

  return result;
}

function updateDisplay(input) {
  display.textContent = `${input}`;
}

function setNum(num) {
  if (isNewOperation) {
    currentInput = num.toString();
    isNewOperation = false;
  } else {
    currentInput += num.toString();
  }
  updateDisplay(currentInput);
}

let currentInput = "";
let isNewOperation = true;

const display = document.querySelector(".display");

const num1 = document.querySelector(".number.one");
const num2 = document.querySelector(".number.two");
const num3 = document.querySelector(".number.three");
const num4 = document.querySelector(".number.four");
const num5 = document.querySelector(".number.five");
const num6 = document.querySelector(".number.six");
const num7 = document.querySelector(".number.seven");
const num8 = document.querySelector(".number.eight");
const num9 = document.querySelector(".number.nine");
const num0 = document.querySelector(".number.zero");

num1.addEventListener("click", () => setNum(1));
num2.addEventListener("click", () => setNum(2));
num3.addEventListener("click", () => setNum(3));
num4.addEventListener("click", () => setNum(4));
num5.addEventListener("click", () => setNum(5));
num6.addEventListener("click", () => setNum(6));
num7.addEventListener("click", () => setNum(7));
num8.addEventListener("click", () => setNum(8));
num9.addEventListener("click", () => setNum(9));
num0.addEventListener("click", () => setNum(0));

let firstNum;
let secondNum;
let operator;

const addBtn = document.querySelector(".operator.add");
const subtractBtn = document.querySelector(".operator.subtract");
const multiplyBtn = document.querySelector(".operator.multiply");
const divideBtn = document.querySelector(".operator.divide");

addBtn.addEventListener("click", () => selectOperator("+"));
subtractBtn.addEventListener("click", () => selectOperator("-"));
multiplyBtn.addEventListener("click", () => selectOperator("*"));
divideBtn.addEventListener("click", () => selectOperator("/"));

function selectOperator(op) {
  if (currentInput === "") {
    // If no number is entered, just update the operator
    operator = op;
    return;
  }

  if (firstNum === undefined) {
    firstNum = Number(currentInput);
  } else if (!isNewOperation) {
    // If we're chaining operations, calculate the previous result first
    secondNum = Number(currentInput);
    const result = operate(firstNum, secondNum, operator);
    if (typeof result === "string" && result.startsWith("Error")) {
      updateDisplay(result);
      return;
    }
    firstNum = result;
    updateDisplay(result);
  }

  operator = op;
  currentInput = "";
  isNewOperation = false;
}

function calculate() {
  if (!firstNum || !operator || currentInput === "") return;

  secondNum = Number(currentInput);
  const result = operate(firstNum, secondNum, operator);
  updateDisplay(result);

  if (typeof result === "string" && result.startsWith("Error")) {
    clearCalculator();
  } else {
    currentInput = result.toString();
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;
    isNewOperation = true;
  }
}

const equalsBtn = document.querySelector(".operator.equals");
const clearBtn = document.querySelector(".operator.clear");

equalsBtn.addEventListener("click", () => calculate());
clearBtn.addEventListener("click", () => clearCalculator());

function clearCalculator() {
  currentInput = "";
  firstNum = undefined;
  secondNum = undefined;
  operator = undefined;
  isNewOperation = true;
  updateDisplay("");
}
