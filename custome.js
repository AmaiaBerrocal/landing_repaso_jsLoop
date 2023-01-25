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
    for (let i = numFrom; i <= numTo; i+=3) {
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

check.addEventListener("click", changeCheck);
function changeCheck() {
    check.checked = true;
    console.log(check.checked)
}

if (check.checked = true) {
    console.log(button.disabled);

}
