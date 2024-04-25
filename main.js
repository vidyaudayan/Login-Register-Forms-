const log = document.getElementById("login")
const reg = document.getElementById("register")
const button = document.getElementById("btn")

function register(){
    log.style.left= "-400px"
    reg.style.left= "50px"
    button.style.left="110px"
}

function login(){
    log.style.left= "50px"
    reg.style.left= "450px"
    button.style.left="0px"
}