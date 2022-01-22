let buttonPlus = document.getElementById("plus");
let buttonMinus = document.getElementById("minus");
let buttonMultiplication = document.getElementById("multiplication");
let buttonDivision = document.getElementById("division");
let buttonSqrt = document.getElementById("sqrt");
let buttonFact = document.getElementById("factorial");
// let buttonsArray = [buttonPlus, buttonMinus, buttonMultiplication, buttonDivision];
let buttonsArray = document.getElementsByClassName("mathActions");

let imput1 = document.getElementById("number1");
let imput2 = document.getElementById("number2");
let inputForSqrt = document.getElementById("sqrtInp");

function addSerialNumberInButtonArray(i) {
    buttonsArray[i].addEventListener("click", oneListenerForAllButtons);
}

for (let i = 0; i < buttonsArray.length; i++) {
    addSerialNumberInButtonArray(i);
    let buttonWithSerialNum = buttonsArray[i];
    buttonWithSerialNum.addEventListener("click", oneListenerForAllButtons);
}

function oneListenerForAllButtons(eventObject) {
    let clickedEl = eventObject.currentTarget;
    let signOperation = clickedEl.innerHTML;
    makeOperation(signOperation);
}

function showResult(result) {
    let buttonResult = document.getElementById("result");
    buttonResult.value = result;
}

function makeOperation(operationValue) {
    let result;
    let number1 = Number(imput1.value);
    let number2 = Number(imput2.value);
    let numForSqrt = Number(inputForSqrt.value);

    if (operationValue === "+") {
        result = number1 + number2;
    } else if (operationValue === "-") {
        result = number1 - number2;
    } else if (operationValue === "*") {
        result = number1 * number2;
    } else if (operationValue === "/") {
        result = number1 / number2;
    } else if (operationValue === "√") {
        result = Math.sqrt(numForSqrt);
    } else if (operationValue === "!") {
        result = factorial(numForSqrt);
    } else {
        console.log("operation is not defined. Try Again!");
    }

    showResult(result);
    number1 = null;
    number2 = null;
}

function factorial(n) {
    let answer = 1;
    if (n === 0 || n === 1) {
        return answer;
    } else {
        for (let i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}