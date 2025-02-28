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
    switch (operator) {
        case "+": add(firstNum, secondNum);
            break;
        case "-": subtract(firstNum, secondNum);
            break;
        case "*": multiply(firstNum, secondNum);
            break;
        case "/": divide(firstNum, secondNum);
            break;
    }
}

function updateDisplay(input) {
    display.textContent = `${input}`;
}

function setNum(num) {
    if (firstNum != -1) {
        firstNum = num;
    }
    else {
        secondNum = num;
    }
}














const display = document.querySelector(".display");

updateDisplay("3");

const num1 = document.querySelector(".number.one");
const num2 = document.querySelector(".number.two");
const num3 = document.querySelector(".number.three");
const num4 = document.querySelector(".number.four");
const num5 = document.querySelector(".number.five");
const num6 = document.querySelector(".number.six");
const num7 = document.querySelector(".number.seven");
const num8 = document.querySelector(".number.eight");
const num9 = document.querySelector(".number.nine");


num1.addEventListener("click", () => setNum(1));
num2.addEventListener("click", () => setNum(2));
num3.addEventListener("click", () => setNum(3));
num4.addEventListener("click", () => setNum(4));
num5.addEventListener("click", () => setNum(5));
num6.addEventListener("click", () => setNum(6));
num7.addEventListener("click", () => setNum(7));
num8.addEventListener("click", () => setNum(8));
num9.addEventListener("click", () => setNum(9));

let firstNum;
let secondNum;
let operator;