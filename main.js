const form = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const message = document.querySelector('.msg')
const userList = document.querySelector('#users')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (nameInput.value === '' || emailInput.value === '') {
        message.classList.add('error')
        message.innerHTML = 'All fields are mandatory'

        //removes the message after 3sec
        setTimeout(() =>message.remove(), 3000)
    } else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        userList.appendChild(li)

        nameInput.value = ''
        emailInput.value = ''
    }

})