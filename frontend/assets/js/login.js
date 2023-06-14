const boardLogin = document.querySelector('.login')
const containerLogin = document.querySelector('.login-container')

const login = document.querySelector('.nav-login')
const bgClose = document.querySelector('.login')

const close = document.querySelector('.fa-solid.fa-xmark')

const loginButton = document.querySelectorAll('.introduction-button')

login.onclick = () => {
    boardLogin.style.display = 'flex'
    containerLogin.classList.add('animate__fadeInDown')
}

loginButton.forEach(button => {
    button.onclick = () => {
        boardLogin.style.display = 'flex'
        containerLogin.classList.add('animate__fadeInDown')
    }
})

containerLogin.addEventListener('click', function (event) {
    event.stopPropagation()
})

close.onclick = () => {
    boardLogin.style.display = 'none'
    containerLogin.classList.remove('animate__fadeInDown')
}

bgClose.onclick = () => {
    boardLogin.style.display = 'none'
    containerLogin.classList.remove('animate__fadeInDown')
}