// WHILE LOOP
// A while statement executes its statements as long as a specified condition evaluates to true.
// Are used for repetition not condition,
// Does iteration.


// let gender  = 'male'

// while(gender == 'male'){
//     console.log('You are a Man!') // infinitely running
// }

//1
let number = 0

while(number < 10){
    console.log("i'm a man!") // runs 10 times.
    number++ // increment by one.
}
    console.log('operation ended')

//2
let n = 1

while (n <= 10) {
  if(n % 2 == 0){ // checks remainder equals to zero, for even and not for odd.
    console.log(`${n} is an even number`)
  }
  else{
    console.log(`${n} is an odd number`)
  }
  n++  
}

//DO WHILE LOOP
// the statement is always executed once before the condition is checked. 
//if the condition is true, the statement executes again.

//1
let Nmbr = 0

do{
    Nmbr++
    console.log(`Number ${Nmbr}`)
}
while (Nmbr < 10)
    // runs 1 ~ 10, running 1 before checking condition.

//2
let Nmb = 0

do{
   
    console.log(`The number is ${Nmb}`)
    Nmb++
}
while (Nmb < 10)
    // runs 0 ~ 9, running 0 before checking condition.

//3 
let nmbr = 6

do{
    nmbr++
    console.log(`Number ${nmbr}`)
}
while (nmbr < 5)
    // runs number 6,before checking condition and then stops.
    
//4
let i = 0

do {
    i += 1
    console.log(i)
} 
while (i < 5)
    // runs 1 ~ 5, running 1 before checking condition.

// FOR LOOPS
// is a loop that repeats until a specified condition evaluates to false.

//1
for(let nmb = 0; nmb < 5; nmb++){
    console.log(nmb)
}

//2
for(let k = 0; k < 5; k++){
    if(k % 2 == 0){
        console.log(`${k} is an even number`)
    } else if(k == 0){
        console.log(`${k} is a neutral number`)
    }else{
        console.log(`${k} is an odd number`)
    } // prints 0 as an even number.
}

//3
for(let j = 0; j < 5; j++){
    if(j % 2 == 0 && j > 0){
        console.log(`${j} is an even number`)
    } else if(j == 0){
        console.log(`${j} is a neutral number`)
    }else{
        console.log(`${j} is an odd number`)
    } // prints 0 as a neutral number.
}

// NESTED FOR LOOPS
// A nested loop has one or more loop inside of another.
/*
    1.Draw a triangle using Asterics.
    2.Write a palindrome checker.
*/

//1
for(let q = 0; q < 5; q++){
    console.log(`N10,000,000 alert by Amangi`)
    for(let r = 0; r < 3; r++){
        console.log(`${r + 1} Ram rice received from Yvonne`)
    }
}

//2
// right-triangle.

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

//3
// Palindrome checker.
/*
List of palindromes words.
kayak.
deified.
rotator.
repaper.
deed.
peep.
wow.
noon.
*/

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

*/


// FOR OF LOOPS

//1
let arrayOfAges = [23, 21, 28, 26, 19]

for(age of arrayOfAges){
    console.log(age)
    //loops the ages in the array
}

//2
let arrayOfAge = [23, 21, 28, 26, 19]

for(age of arrayOfAge){
    console.log(++age)
    //loops the ages in the array and adds 1 to each element.
}

//FOR IN LOOPS

const AmangiAccount ={
    bankname: 'Access bank',
    "account name": 'Amangi Money Money',
    accNumber: '0002179015'
}
for(keys in AmangiAccount){
    console.log(keys) // prints out the keys.
    //console.log(AmangiAccount[keys]) // prints the properties.
}