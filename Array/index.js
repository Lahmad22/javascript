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
    FisrtName:'Ahmad',
    age: 25,
    bestSubject: 'Physics',
    favouriteTeacher: 'Mr bello',
    hobby:'Cycling',
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
    bestSubject: 'Mathematics',
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