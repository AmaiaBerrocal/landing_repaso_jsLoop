
document.getElementById("boton").addEventListener("click",printRangeOfNumbers)

//let firstImput = document.getElementById("firstNumber").value;
let firstNumber = 10//parseInt(firstImput)
let secondNumber =20

function printRangeOfNumbers(numFrom, numTo) {
    let parrafo= document.createElement("p")
    let result = ""
    for (let i = numFrom; i <= numTo; i++) {
        console.log(i)
        result += i + ", "
    }
    parrafo.innerHTML = result
    let contenedor = document.getElementById("resultado")
    contenedor.appendChild(parrafo)
}

if(firstNumber < secondNumber){
    printRangeOfNumbers(firstNumber, secondNumber)
}else{
    printRangeOfNumbers(secondNumber, firstNumber)
}