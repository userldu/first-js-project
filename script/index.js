let inp = document.getElementById("inp");
let inpPass = document.getElementById("inp-pass");
let inpMail = document.getElementById("inp-mail");
let searchBar = document.querySelector(".search-bar");
let eyeYes = document.querySelector('.bi-eye-fill');
let eyeNo = document.querySelector(".bi-eye-slash-fill");
const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let btnLogin = document.getElementById("btn");
let btnregister = document.getElementById("register-btn")
let errorMail;
let errorPass;
let mailForm = document.querySelector(".email");
let passForm = document.querySelector(".password")
const errorIcon = `<i class="bi bi-exclamation-octagon"></i>`
let aLogin = document.getElementById("for-login");
let aRegister = document.getElementById("for-register");
let formLogin = document.getElementById("login")
let formRegister = document.getElementById("register")
let container = document.querySelector(".container")


function info() {
    let inpPassValue = document.getElementById("inp-pass").value;
    let inpMailValue = document.getElementById("inp-mail").value;

    localStorage.setItem("inp-mail", inpMailValue);
    localStorage.setItem("inp-pass", inpPassValue);
}

function navbar() {

    localStorage.setItem("navbarHTML", document.getElementById("navbar").outerHTML);
}

aLogin.addEventListener('click', (e) => {

    e.preventDefault()
    formLogin.style.display = 'none';
    formRegister.style.display = 'flex';

    container.style.padding = "43px 200px"

})

aRegister.addEventListener('click', (e) => {

    e.preventDefault()
    formLogin.style.display = 'flex';
    formRegister.style.display = 'none';

    container.style.padding = "60px 200px"

})

eyeNo.addEventListener('click', () => {

    eyeYes.style.display = 'block'
    eyeNo.style.display = 'none'
    inpPass.type = 'text'
})
eyeYes.addEventListener('click', () => {

    eyeNo.style.display = 'block'
    eyeYes.style.display = 'none'

    inpPass.type = 'password'

})

btnLogin.addEventListener('click', (e) => {

    e.preventDefault()

    if (!pattern.test(inpMail.value)) {
        if (!errorMail) {
            inpMail.focus()

            errorMail = document.createElement("span")
            errorMail.innerHTML = `${errorIcon} Emaili duzgun daxil edin !`
            mailForm.appendChild(errorMail)

            errorMail.classList.add("error-mail")

            inpMail.style.border = "1px solid red"
        }
    } else if (inpPass.value.length < 8) {
        if (!errorPass) {

            inpPass.focus()

            errorPass = document.createElement("span")
            errorPass.innerHTML = `${errorIcon} Şifrə 8 simvol olmalıdır !`
            passForm.appendChild(errorPass)

            errorPass.classList.add("error-mail")

            inpPass.style.border = "1px solid red"
        }
    } else {

        window.location.href = "personal-information.html"
        info()
        navbar()
    }


})


btnregister.addEventListener('click', (e) => {

    e.preventDefault()
})

inpPass.addEventListener('input', () => {

    if (inpPass.value === "") {
        eyeNo.style.display = "none"
    } else {
        eyeNo.style.display = "block"
    }
})

// Error validation silme

inpMail.addEventListener('input', () => {

    if (errorMail) {
        if (pattern.test(inpMail.value)) {
            mailForm.removeChild(errorMail)
            errorMail = null;

            inpMail.style.border = "1px solid #000"
        }
    }
})

inpPass.addEventListener('input', () => {

    if (errorPass) {
        if (inpPass.value.length >= 8) {

            passForm.removeChild(errorPass)
            errorPass = null;

            inpPass.style.border = "1px solid #000"
        }
    }
})