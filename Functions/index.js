/*FUNCTIONS
    block of code designed to perform a task

- callback funtion
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