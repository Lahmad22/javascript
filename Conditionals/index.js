//CONDITIONALS
// SOMETHING DONE or to be done, WHEN A REQUIREMENT IS MET.

//Single Conditional Statement
/*
let today = 'friday'

if(today == 'Wednesday'){
    alert("it is the middle of the week")
}
else{
    alert("it is another day of the week")
}   

//Multiple Conditional Statement

if (today == 'Wednesday'){
    alert('middle of the week')
}
else if (today == 'Monday'){
    alert('it is the begining of the week')
} 
else if(today == 'Friday'){
    alert('it is a weekend')
}
else{
    alert('it is a regular day')
}

let num = 2
    if(num > 0)
        console.log(`${num} is a positive number`)

    else if(num < 0)
        alert(`${num} is a negative number`)
    else(
        console.log("not a number")
    )
*/

//Switch Case Conditional Statement
/*
let dayUserInput = prompt("What day is today?")
let day = dayUserInput.toLowerCase()

switch (day) {
    case "monday":
      console.log(" today is monday.")
      break;
    case "tuesday":
      console.log("today is tuesday.")
      break;
    case "wednesday":
      console.log("today is wednesday.")
      break;
    case "thursday":
      console.log("today is thursday.")
      break;
    case "friday":
      console.log("today is friday.")
      break;
    case "saturday":
      console.log("today is saturday.")
      break;
    case "sunday":
      console.log("today is sunday.")
    default:
        console.log("It's not a day of the week")
  }
*/

/*
let expr = 'Apples'
    
switch (expr) {
    case "Oranges":
      console.log("Oranges are $0.59 a pound.")
      break
    case "Apples":
      console.log("Apples are $0.32 a pound.")
      break
    case "Bananas":
      console.log("Bananas are $0.48 a pound.")
      break
    case "Cherries":
      console.log("Cherries are $3.00 a pound.")
      break
    case "Mangoes":
    case "Papayas":
      console.log("Mangoes and papayas are $2.79 a pound.")
      break
    default:
      console.log(`Sorry, we are out of ${expr}.`)
  }
  
  console.log("Is there anything else you'd like?")
*/
/*
let weather ='cloudy'
switch(weather){
    case "rainy":
        console.log("you need a rain coat.")
        break
    case "cloudy":
        console.log("it might be cold, you need a jacket.")
        break
    case "sunny":
        console.log("go out freely.")
        break
    default:
        console.log("no need for a rain coat.")
}

let Weather = "Rainy"
switch(Weather){
    case "Rainy":
        console.log("take an umbrella, it's raining.")
        break
    case "Sunny":
        console.log("Might need a face cap or umbrella.")
        break
    case "Windy":
        console.log("don't wear free clothes.")
    default:
        console.log("we got a cloudy weather.")
}
*/

/*ASSIGNMENT
~Learn about ternary operators.

~use the switch case, lowercase implied (5 cases)
use alert
john
peter
philip
jeremiah
isaiah

default "not a boy name."

*/
let Num = prompt('Enter a number')

switch (true) {
    case Num > 0:
      console.log(`${Num} Number is Positive integer.`)
      break;
    case Num < 0:
      console.log(`${Num} Number is Negative integer.`)
      break;
    case Num == 0:
        console.log(`${Num} Number is zero.`)
        break;
    default:
        console.log(`${Num} Not a number`)
  }

  
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