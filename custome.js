document.querySelector("#boton").addEventListener("click", printRangeOfNumbers);

const imput1 = document.getElementById("firstNumber");
const imput2 = document.getElementById("secondNumber");

function printRangeOfNumbers() {
    let firstNumber = parseInt(imput1.value); 
    let secondNumber = parseInt(imput2.value); 
    
    if (firstNumber < secondNumber) {
        calculateRangeOfNumbers(firstNumber, secondNumber);
    } else {
        calculateRangeOfNumbers(secondNumber, firstNumber);
    }
}

function calculateRangeOfNumbers(numFrom, numTo) {
    let result = "";
    for (let i = numFrom; i <= numTo; i++) {
            if (i !=  numTo) {
                result += i + ", ";
            } else {
                result += i + "."; 
            }
    }
    document.querySelector("#results").innerHTML = result;
}

let check = document.getElementById("cbox");
let button = document.getElementById("boton");
check.addEventListener("change", disbleSending)

function disbleSending(){
    button.disabled = !check.checked;
}
