// ARRAYS
//An array in JavaScript is a type of global object used to store data.


// 1
let arrayOfAge = [9, 12, 10, 8, 6, 7, 5, 15]
 console.log(typeof(arrayOfAge))
 console.log(arrayOfAge.length)
 console.log(arrayOfAge.reverse())

// 2
let ArrayOfNames = new Array('Eunice', 'Peter', 'Micheal', 'Amangi', 'Samuel')// Array constructor

//ARRAY METHODS 
console.log(arrayOfAge[5])
console.log(arrayOfAge[2])
console.log(arrayOfAge[4])

arrayOfAge[1] = 20
ArrayOfNames[5] = 'Goodluck'

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
    // removes the last item of an array.
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

      // ASSIGNMENT
      /* 
      create array of object with 3 users(password and email)
      simple function to verify the users(prompt user)
      alert('password is correct', 'not correct)
      alert('Welcome user') when successful
      */

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
          alert('Password is not correct')
        }
      }
      
      verifyUser()
      