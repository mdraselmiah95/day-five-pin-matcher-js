function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
        // console.log(number);
    }

})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    const successMassage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumber) {
        successMassage.style.display = 'block';
        failError.style.display = 'none';
    } else {
        failError.style.display = 'block';
        successMassage.style.display = 'none';
    }
}



////////////////

/* let count = 0;
console.log(parseInt('count' + 1)); */


// Map.pow(4, 0.5);
// console.log(Math.pow(4, 0.5) + 'spiderman' + '987' + Math.sqrt(9));

/* function generatePin() {
    return Math.floor(Math.random() * 90000) + 10000;
}
console.log(generatePin()); */
// console.log(!isNaN('10X'));
/* const category = 'pen';
const performer = category + '-teller';
console.log(performer); */