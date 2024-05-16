function calculate(operator) {


let inputElement1 = parseFloat(document.getElementById("display1").value);
let inputElement2 = parseFloat(document.getElementById("display2").value);
let resultElement;

    switch(operator) {

        case '+':
            resultElement = inputElement1 + inputElement2;
            break;

         case '-':
            resultElement = inputElement1 - inputElement2;
            break;

        case '*':
            resultElement = inputElement1 * inputElement2;
            break;

        case '/':
            resultElement = inputElement1 / inputElement2;
            break;

        default:
            resultElement = "Invalid Operator";
            

    }

    document.getElementById("result").innerHTML = "Result: " + resultElement;
}

function clearCalculate() {

    document.getElementById("display1").value = "";
    document.getElementById("display2").value = "";
    document.getElementById("result").innerHTML = "";
   
}








