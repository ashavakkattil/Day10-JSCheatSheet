//Selects single elements based on the tag or classname or ID
console.log(document.querySelector('h1'))
console.log(document.querySelector('#my-form'))

//Selects multiple elements based on the tag or classname or ID
console.log(document.querySelectorAll('h1'))
console.log(document.querySelectorAll('#my-form'))

const headers = document.querySelectorAll('h1')
//loops through all the headers and displays the elements
headers.forEach(h => console.log(h))

//Manipulate the childeren of the grabbed element - ul in this case
const ulItems = document.querySelector('.items')
ulItems.firstElementChild.textContent = 'hello'
ulItems.children[1].innerHTML = '<h1> hey there </h1>'

const button = document.querySelector('.btn')
button.style.background = 'yellow'
button.style.color = '#000'

//Events
button.addEventListener('click', (e) => {
    //to prevent the default behaviour of the submit button, which is submitting the form in this case
    e.preventDefault();
    document.querySelector('body').style.background = '#ccc'
})