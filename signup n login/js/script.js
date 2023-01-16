function signup(){
    document.getElementById("signup").classList.add("aktifs");
    document.getElementById("login").classList.remove("aktifs");
    document.getElementById("signup").classList.remove("pasifs");
    document.getElementById("login").classList.add("pasifs");
}
function login(){
    document.getElementById("signup").classList.remove("aktifs");
    document.getElementById("login").classList.add("aktifs");
    document.getElementById("signup").classList.add("pasifs");
    document.getElementById("login").classList.remove("pasifs");
}