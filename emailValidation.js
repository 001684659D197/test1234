const email = document.getElementById('email')
const confirmEmail = document.getElementById('confirmEmail')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
var message = 'Email addresses do not match!'

form,addEventListener('submit', (e) => {
    if (email.value != confirmEmail.value) {
        e.preventDefault()
        errorElement.innerText = message
    }
})