document.querySelector("#boton").addEventListener("click", printRangeOfNumbers);

const firstNumber = parseInt(document.querySelector("#firstNumber").value); 
const secondNumber = parseInt(document.querySelector("#secondNumber").value);

function printRangeOfNumbers() {
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
            result += i + " ,";
            console.log( "Estoy en el if" + result);
        } else {
            result += i + "."; 
            console.log("Estoy en el else" + result);

        }
    }
    console.log(result);
    document.querySelector("#results").innerHTML = result;
}