// ARRAYS
//An array in JavaScript is a type of global object used to store data.
// primitive data types; are a set of basic data types from which all other data types are constructed.
// non-primitive data types; are derived from the primitive data types of the JavaScript language
// Array property; is an attribute in a class. 'attributes' is a descriptor.


// 1
let arrayOfAge = [9, 12, 10, 8, 6, 7, 5, 15]
 console.log(typeof(arrayOfAge))
 console.log(arrayOfAge.length)
 console.log(arrayOfAge.reverse())

// 2
let ArrayOfNames = new Array('Eunice', 'Peter', 'Micheal', 'Amangi', 'Samuel')// Array constructor

//ARRAY METHODS 
// causes a change in an array.
console.log(arrayOfAge[5])
console.log(arrayOfAge[2])
console.log(arrayOfAge[4])
console.log(arrayOfAge[-1])
console.log(typeof(ArrayOfNames))

arrayOfAge[1] = 20
ArrayOfNames[5] = 'Goodluck'
ArrayOfNames[0]= 'Ahmad'

console.log(arrayOfAge)
console.log(ArrayOfNames)

// 3
// ARRAY SLICING
 const firstThreeAges = arrayOfAge.slice(3, 5) // 2 items from index 3
 console.log(firstThreeAges)

const lastThreeAges = arrayOfAge.slice(4,7) // 3 items, start with index 4
const lastAge1 = arrayOfAge.slice(7, 8) // wrong, because we don't have index 8, but works
const lastAge2 = arrayOfAge.slice(3,) // from index 3 to end
const lastAge3 = arrayOfAge.slice(-1) // last item
const lastAge4 = arrayOfAge.slice(7) // last item

console.log(lastThreeAges)
console.log(lastAge1)
console.log(lastAge2)
console.log(lastAge3)
console.log(lastAge4)

// 4
// SLICING ARRAY OF OBJECTS
const studentProfile =[
    {
    StudentName:'Ahmad',
    age: 25,
    bestSubject: 'Physics',
    favouriteTeacher: 'Mr bello',
    hobby:'watching movies',
    FutureAmbition: 'make money'
    },
    {
    StudentName:'Eunice',
    age: 22,
    bestSubject: 'Mathematics',
    hobby:'Reading',
    FutureAmbition: 'Engineer'  
    },
    {
    StudentName:'Amangi',
    age: 24,
    bestSubject: 'ICT',
    hobby:'Gaming (COD)',
    FutureAmbition: 'Software Developer'
    },
    {
    StudentName:'Stanley',
    age: 24,
    bestSubject: 'Technical Drawing',
    hobby:'Gaming (Efootball)',
    FutureAmbition: 'Software Developer'
    },
]

    studentProfile[1]['StudentName'] = 'Eunice Adams'
    studentProfile[2].StudentName = 'Amangi Sunday'


    console.log(studentProfile[0])
    console.log(studentProfile[0]['StudentName'])// or
    console.log(studentProfile[1].StudentName)
    // to call an item in the object.
    console.log(studentProfile[2].StudentName)
    
// 5
let arrayOfCars = ['Mercedes Benz', 'Tesla Model 3', 'Range Rover', 'Mercedes GCLE 2050', 'Audi R8', 
    'Bentley Continental GT', 'Dodge Challenger', 'Tesla Model S', 'Mclaren 720']
    console.log(arrayOfCars)

    // POP
    // removes(forceful) the last item of an array.
       arrayOfCars.pop()
       console.log(arrayOfCars)

    // PUSH
    // adds an item to the back of the array.
      arrayOfCars.push('Lamborghini Urus')
      console.log(arrayOfCars)

    // SHIFT
    // removes from the first item of an array.
      arrayOfCars.shift()
      console.log(arrayOfCars)

    // UNSHIFT 
    // adds an item to the beginning of an array list.
      arrayOfCars.unshift('Porche')
      console.log(arrayOfCars)

    // REVERSE
    // reverse the element in an array in place.
      arrayOfCars.reverse()
      console.log(arrayOfCars)

    // JOIN
    // adds all element of an array into a string,sepereated by a specified seperator string.
      arrayofVehicle = arrayOfCars.join('/ ')
      console.log(arrayofVehicle)

    // CONCATENATE
    // combines two or more arrays.
    arrayofVehicle = arrayOfCars.concat(arrayOfAge)
      console.log(arrayofVehicle)

    // FINDINDEX
    // Finds the index of an item in an array

// A Database
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
    console.log(bookDb[4].bookName)


      // ASSIGNMENT
      /* 
      create array of object with 3 users(password and email)
      simple function to verify the users(prompt user)
      alert('password is correct', 'not correct)
      alert('Welcome user') when successful
      */
/*
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

    // ASSIGNMENT
    // write an article

    //first member (talk about array in whole) 'Ahmad'
    //second member(talk about array methods) 'Precious'
    //both give a conclusion.
    // combine and post, on hashnode

    // ARRAY FILTERING AND REDUCE
    // filtering(): Creates a new array with all elements that pass the test implemented by the provided function.
    // Reduce(): Executes a reducer function on each element of the array, resulting in a single output value.

// Assignment
// write a function that can identify the index of an item in the array above 
// using the index, it should return the name and the year of the book (name of the book is , published in [year]).

// 1

/*
function arrayfunction(indexNum){
  return `the ${bookDb[indexNum].bookName} was published in the year ${bookDb[indexNum].year}`
}
let inputIndex = parseFloat(prompt("Enter the index of the book"))
console.log(arrayfunction(inputIndex))
*/

// 2

//Function to retrieve book information by index
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

