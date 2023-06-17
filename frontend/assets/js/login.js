const boardLogin = document.querySelector('.login')
const containerLogin = document.querySelector('.login-container')

const login = document.querySelector('.nav-login')
const bgClose = document.querySelector('.login')

const close = document.querySelector('.fa-solid.fa-xmark')

const loginButton = document.querySelectorAll('.introduction-button')

function loginTrigger() {
    boardLogin.style.display = 'flex'
    containerLogin.classList.add('animate__fadeInDown')
}

login.onclick = () => {
    if(!getCookie("loggedIn")) {
        document.querySelector('#username').value = "";
        document.querySelector('#password').value = "";
        loginTrigger();
    }
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

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

window.addEventListener("load", () => {
    if(getCookie("loggedIn")) {
        document.querySelector('.nav-login-title').innerHTML = "admin"; 
    } else {
        document.querySelector('.tooltiptext').style.display = 'none';
    }
});