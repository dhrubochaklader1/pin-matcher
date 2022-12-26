function getPin() {
    const pin = random();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function random() {
    const maths = Math.round(Math.random() * 10000);
    return maths;
}

document.getElementById("generate-pin").addEventListener("click", function () {
    const pin = getPin();
    const displayPin = document.getElementById("display-pin");
    displayPin.value = pin;
})

// calculator

document.getElementById("calculator").addEventListener("click", function (event) {
    const calcBtn = event.target.innerText;
    const calcDisplay = document.getElementById("typed-numbers");
    let previousNumber = calcDisplay.value;
    if (calcBtn === "C") {
        calcDisplay.value = '';
    }
    if (calcBtn === "<") {
        const digits = previousNumber.split("");
        digits.pop();
        const singleJoin = digits.join("");
        calcDisplay.value = singleJoin;
    }
    else if (isNaN(calcBtn)) {

    }
    else {
        calcDisplay.value = calcDisplay.value + calcBtn;
    }
})

document.getElementById("verify-pin").addEventListener("click", function () {
    const displayPin = document.getElementById("display-pin");
    const display = displayPin.value;
    const calcDisplay = document.getElementById("typed-numbers");
    const previousNumber = calcDisplay.value;
    if (display === '') {
        alert("write number")
    }
    else if (display === previousNumber) {
        const pinSuccess = document.getElementById("pin-success");
        pinSuccess.style.display = "block";
        const pinFail = document.getElementById("pin-fail");
        pinFail.style.display = "none";
    }
    else {
        const pinFail = document.getElementById("pin-fail");
        pinFail.style.display = "block";
        const pinSuccess = document.getElementById("pin-success");
        pinSuccess.style.display = "none";
    }
})

// function calc(event) {
//     const btnText = event.target.innerText;
//     const calcDisplay = document.getElementById("typed-numbers");
//     calcDisplay.value = calcDisplay.value + btnText;
// }