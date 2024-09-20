/*FUNCTIONS
    block of code designed to perform a task

- callback funtion - calling back function inside of a function
- method : a function in a class
- scope : function that accept global variables
- parameter : a variable passed when declaring a function
- argument : a variable passed when calling a function

syntax:
function functionName (parameters){
    operation
    // return output
}

*/
- 1
 function sayMyName(myName){
    console.log(`Your name is ${myName}`)
 }
 sayMyName('Goodluck')

 - 2
 function calculate(n1, operation, n2){
    switch(operation){
        case 'add':
            return n1 + n2;
        case 'subtract':
            return n1 - n2;
        case 'multiply':
            return n1 * n2;
        case 'divide':
            if(n2 !== 0){
                return n1/n2;
            } else{
                return 'Error: division by zero';
            }
        default:
            return 'invalid operation!';
    }
 }
 console.log(calculate(10, 'add', 2))
 console.log(calculate(10, 'subtract', 2))
 console.log(calculate(10, 'multiply', 2))
 console.log(calculate(10, 'divide', 2))
 console.log(calculate(10, 'divide', 0))

 /* Assignment
1. function to calcuate two values
use add ( 2 , add , 3)
use multiply ( 2, multiply, 3)
*/

/*
const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : 'Error: Division by zero!'
  }
  
  function calculate(num1, operation,num2,) {
    return operations[operation] ? operations[operation](num1, num2) : 'Invalid operation!';
  }
  
  console.log(calculate(10, 'add', 2))
  console.log(calculate(10, 'subtract', 2))
  console.log(calculate(10, 'multiply', 2))
  console.log(calculate(10, 'divide', 2))
  console.log(calculate(10, 'divide', 0))
  console.log(calculate(10, 'modulus', 2))
  */

  // 3
/*
function calculator(nmb1, operator, nmb2){
    if (operator == '+' || operator == 'addition'){
        return nmb1 + nmb2
    } else if(operator == '-' || operator == 'substraction'){
        return nmb1 - nmb2
    } else if(operator == '*' || operator == 'multiplication'){
        return nmb1 * nmb2
    } else if(operator == '/' || operator == 'division'){
        return nmb1 / nmb2
    } else if(operator == '%' || operator == 'modulus'){
        return nmb1 % nmb2
    }else{
        return "Use a correct operator"
    }
  }
    console.log(calculator(20, '+', 5))
    console.log(calculator(20, '-', 5))
    console.log(calculator(20, '*', 5))
    console.log(calculator(20, '/', 5))
    console.log(calculator(20, '%', 5))
    
// 4
  let userInputNumber = parseFloat(prompt("Enter first number"))
  let nmb1 = userInputNumber

  let userInputNumber2 = parseFloat(prompt("Enter second number"))
  let nmb2 = userInputNumber

  let userInputOperator = prompt("give operator (addition, subtraction, multiplication, division, modulus):")
  let operator = userInputOperator

  function calculator(nmb1, operator, nmb2){
    if (operator == '+' || operator == 'addition'){
        return nmb1 + nmb2
    } else if(operator == '-' || operator == 'substraction'){
        return nmb1 - nmb2
    } else if(operator == '*' || operator == 'multiplication'){
        return nmb1 * nmb2
    } else if(operator == '/' || operator == 'division'){
        return nmb1 / nmb2
    } else{ operator == '%' || operator == 'modulus'
        return nmb1 % nmb2
    }
  }
    const result = calculator(nmb1, operator, nmb2)
    console.log(`Result is ${result}`) */

    // Assignment
    // simple interest calculator

    // 5
    /*
    function simpleInterest(principal, rate, time) {
        return (principal * rate * time) / 100;
    }
    const principal = parseFloat(prompt('Enter the principal amount:'));
    const rate = parseFloat(prompt('Enter the interest rate (in %):'));
    const time = parseFloat(prompt('Enter the time period (in years):'));
    
    const interest = simpleInterest(principal, rate, time);
    console.log(`Simple Interest: ${interest}`);
    */
    // 6
    function welcomeMessage(firstname){
        console.log(`Welcome to the class ${firstname}`)
    }
    let firstname = 'Enyi'
    welcomeMessage()// output undefined
    // welcomeMessage(firstname) // will output name

    function displayDetails(firstname, age, height){
         console.log(`Welcome to the class ${firstname}, you are ${age} years old and your height is ${height}`)
    }
    let personName = 'Jude'
    let personAge = 13
    personHeight = '5ft'

    displayDetails(personName, personAge, personHeight)
    // function is interested in the index of the parameters and not in the name.
