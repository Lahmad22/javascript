 /* CONDITIONAL ASSIGNMENT
~Learn about ternary operators.
~use the switch case, lowercase implied (5 cases)
use alert
john
peter
philip
jeremiah
isaiah

default "not a boy name."


let AnameUserInput = prompt("Type a name")
let Aname = AnameUserInput.toLowerCase()

switch (Aname) {
    case "john":
        alert("john is a male name.")
      break
    case "peter":
        alert("peter is a male name.")
      break
    case "philip":
        alert("philip is a male name.")
      break
    case "jeremiah":
        alert("jeremiah is a male name.")
      break
    case "isaiah":
        alert("isaiah is a male name.")
      break
    default:
        alert(`${Aname} is not a male name.`)
}
*/
 
 // ARRAY ASSIGNMENT
      /* 
      create array of object with 3 users(password and email)
      simple function to verify the users(prompt user)
      alert('password is correct', 'not correct)
      alert('Welcome user') when successful
      

      const users = [
        { email: 'user1@gmail.com', password: 'password1' },
        { email: 'user2@gmail.com', password: 'password2' },
        { email: 'user3@gmail.com', password: 'password3' }
      ]

      function verifyUser() {
        const userEmail = prompt('Enter your email(in lowercase):').toLowerCase()
        const userPassword = prompt('Enter your password:')

        let foundUser = false

        users.forEach(function(user) {
            
          if (user.email === userEmail && user.password === userPassword){
            foundUser = true
            alert(`Welcome, ${user.email}!`)
          }
        })
      
        if (!foundUser) {
          alert('Details is/are not correct')
        }
      }
      
      verifyUser()
      */
      
 /* fUNCTION ASSIGNMENT

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
/*2. 
function simpleInterest(principal, rate, time) {
        return (principal * rate * time) / 100;
    }
    const principal = parseFloat(prompt('Enter the principal amount:'));
    const rate = parseFloat(prompt('Enter the interest rate (in %):'));
    const time = parseFloat(prompt('Enter the time period (in years):'));
    
    const interest = simpleInterest(principal, rate, time);
    console.log(`Simple Interest: ${interest}`);
*/
/*
// LOOPS ASSIGNMENT
/*
    1.Draw a triangle using Asterics.
    2.Write a palindrome checker.
*/

/* 2.
List of palindromes words.
kayak.
deified.
rotator.
repaper.
deed.
peep.
wow.
noon.


let Userword = prompt("Enter a word: ")
word = Userword.toLowerCase() // convert to lowercase for case-insensitive comparison

let reversedWord = word.split("").reverse().join(""); // reverse the word

if (word === reversedWord) {
  console.log(word + " is a palindrome.")
} else {
  console.log(word + " is not a palindrome.")
}

/*
- prompt the user to input a word and convert it to lowercase for case-insensitive comparison.
- then reverse the word using the split(), reverse(), and join() methods.
- Finally, compare the original word with the reversed word. If they're the same, 
    it's a palindrome; otherwise, it's not.


    2. right-triangle.
for (let i = 0; i < 5; i++) {
    let line = ''
    for (let j = 0; j <= i; j++) {
      line += '* '
    }
    console.log(line);
  }
  
  /*
  - The outer loop (i) controls the number of rows.
  - The inner loop (j) controls the number of asterisks in each row.
  - The inner loop iterates from 0 to i (the current row number), adding an asterisk and a space to the row string on each iteration.
  - After the inner loop completes, the row string is printed to the console using console.log(row).
*/

// Assignment
// write a function that can identify the index of an item in the array of books. 
// using the index, it should return the name and the year of the book (name of the book is , published in [year]).

// The Book Database

let bookDb = [
      {
        bookName: 'Chronicles of Nania',
        year: '1990',
        id: 1
      },
      {
        bookName: 'Secret of a secret place',
        year: '2004',
        id: 2
      },
      {
        bookName: 'Arrow of god',
        year: '1980',
        id: 3
      },
      {
        bookName: 'Multipurpose',
        year: '2000',
        id: 4
      },
      {
        bookName: 'Atomic Habits',
        year: '2004',
        id: 5
      },
      {
        bookName: 'Purple Hibiscus',
        year: '2003',
        id: 6
      }
    ]


    function getBookInfo(index) {
      if (index >= 0 && index < bookDb.length && Number.isInteger(index)) {
        const book = bookDb[index]
        return `The name of book is ${book.bookName} and it was published in the year ${book.year}.`
      } else {
        return `Invalid index. Please enter a whole number between 0 and ${bookDb.length - 1}.`
      }
    }
    
    // Get user input and validate
    while (true) {
      let inputIndex = parseInt(prompt('Enter the index of the book'))
      
      if (!isNaN(inputIndex)) {
        console.log(getBookInfo(inputIndex))
        break
      } else {
        console.log('Invalid input. Please enter a number.')
      }
    }
    