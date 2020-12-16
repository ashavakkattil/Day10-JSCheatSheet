//var - globaly scoped
//let,const - block scoped
//let - allows reassignmemt whereas const does not
//const has to be always initialized with a value


/* ****************************JS Datatypes - String, Numbers, Boolean, null, undefined *************************/

const name = 'john'
const age = 30
const rating = 3.5
const isCool = true
const x = null
const y = undefined
//z will have a value undefined stored in it
let z;

console.log(typeof (name), typeof (age), typeof (rating), typeof (isCool), typeof (x), typeof (y), typeof (z))

//concatenation
console.log('my name is ' + name + 'and i am ' + age)

//Template literal

console.log(`My name is ${name} and I am ${age}`)

const s = 'hello world'
//prints 'ello w' starts at 1 and end before 7
console.log(s.substring(1, 7))

//splits the string into an array of letters
console.log(s.split(''))

//splits the string into an array of words
const v = 'computers, technology, web, it'
console.log(v.split(','))

/* **************************************************************Arrays******************************************************* */

//One way of initialising
const numbers = new Array(1, 2, 3, 4)
console.log(numbers)

//Another way pf initialising

const fruits = ['apples', 'oranges', 'bananas']
console.log(fruits)

console.log(fruits[1])

//Add at the end
fruits.push('mangoes')

//Add at the beginning
fruits.unshift('grapes')

//Delete an element
fruits.pop()

//Find the index of an element
//if element mot present it will return -1 else will return the index
console.log(fruits.indexOf('apples'))

//check if the given value is an array or not
console.log(Array.isArray(numbers))

/* ********************************************************Objects************************************************** */

const person = {
    firstname: 'John',
    age: 30,
    hobbies: ['music', 'sports', 'reading'],
    address: {
        street: 'No: 10',
        city: 'Calcutta',
        state: 'WB'
    }
}
//prints the second otem from the hobbies array
console.log(person.hobbies[1])

//prints city from the object address
console.log(person.address.city)

//Destructuring
//here the values of firstName and address are pulled out of the person object
const { firstname, hobbies } = person
console.log(hobbies)

//Destructuring the nested object address inside the person
const { address: { city, state } } = person
console.log(state)

//Adding a new value to object
person.email = 'abc@abc.com'

/* ********************************************************* Array of Objects ************************************** */

const todo = [
    {
        id: 1,
        task: 'make lunch',
        status: true
    },
    {
        id: 2,
        task: 'eat lunch',
        status: true
    },
    {
        id: 3,
        task: 'Doc appt',
        status: false
    },
]
console.log(todo)
//prints the status of the second item in the todo array - o/p: true
console.log(todo[1].status)

//Convert todo to JSON
const todoJson = JSON.stringify(todo)
console.log(todoJson)

/* *********************************************************Loops****************************************************** */
//For loop
for (let i = 0; i < 10; i++) {
    console.log(`For loop no: ${i}`)
}

//while loop
let i = 0;
while (i < 10) {
    console.log(`while loop no : ${i}`)
    i++
}

//Looping through arrays
//prints each object of the todo array
for (t of todo) {
    console.log(t)
}

//Higher order array functions
//forEach
todo.forEach(item => {
    console.log(item.task)
})

//map - creates  a new array with the values
const newArray = todo.map(item => {
    return item.id
})
console.log(newArray)

//filter
const completedTodo = todo.filter(item => {
    return item.status === true
})

console.log(completedTodo)

//returns the task names of completed items
console.log(completedTodo.map(i => i.task))

/* **************************************************************** Conditionals******************************************** */
// === checks for the value as well as type
// == checks just the value

let j = '10';
if (j === 10) {
    console.log('j is a number')
} else {
    console.log('j is not a number')
}

if (j == 10) {
    console.log('j is a number')
} else {
    console.log('j is not a number')
}

/* **************************************************************** Functions******************************************** */
//Constructor functions

function Person(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)

    //methods
    /*   this.getFullName = () =>{
          return `${this.firstName} ${this.lastName}`
      }
      this.getYear = () =>{
          return this.dob.getFullYear()
      } */
}

//put the methods of the object in prototype
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}
Person.prototype.getYear = function () {
    return this.dob.getFullYear()
}
const person1 = new Person('John', 'Doe', '1-2-1980')
console.log(person1)

//Classes - does the same thing but in a better way wrt syntax

class ClassPerson {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
const classperson1 = new ClassPerson('Johny', 'Doe', '1-2-1980')
console.log(classperson1)
