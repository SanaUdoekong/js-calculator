
let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));
let op = prompt("Choose an operation[+, -, *, /]:");

let ans = "Syntax Error!";

function getAnswer(num1, num2, op) {
    if(op == '+') {
        ans = num1 + num2;
        if(isNaN(ans) == true) {
            alert("Please ensure you enter integers!");
        } else {
            alert("The answer is: " + ans + "!");
        }
    } else if (op == '-') {
        ans = num1 - num2;
        if(isNaN(ans) == true) {
            alert("Please ensure you enter integers!");
        } else {
            alert("The answer is: " + ans + "!");
        }
    } else if (op == '*') {
        ans = num1 * num2;
        if(isNaN(ans) == true) {
            alert("Please ensure you enter integers!");
        } else {
            alert("The answer is: " + ans + "!");
        }
    } else if (op == '/') {
        ans = num1 / num2;
        if(isNaN(ans) == true) {
            alert("Please ensure you enter integers!");
        } else {
            alert("The answer is: " + ans + "!");
        }
    } else {
        alert("Syntax Error!");
    }
}

getAnswer(num1, num2, op);
