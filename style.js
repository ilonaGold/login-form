let loginform =document.getElementById('loginform');
let regform = document.getElementById('regform');
let btndesign = document.getElementById('btndesign');
let btnSignIn = document.getElementById("btn-signin");
let btnSignUp = document.getElementById("btn-signup");

btnSignIn.addEventListener("click", logform);
btnSignUp.addEventListener("click", rgform);


function rgform() {
    if (window.matchMedia('(max-width:768px)').matches) {
        loginform.style.left = "-500px";
        regform.style.left="11%";
        btndesign.style.left="0px";
    }
    else if (window.matchMedia('(max-width:812px)').matches) {
        loginform.style.left = "-500px";
        regform.style.left="12%";
        btndesign.style.left="0px";
    } else {
        loginform.style.left="-500px";
        regform.style.left="15%";
        btndesign.style.left="0px";
    }
}

function logform() {
    if (window.matchMedia('(max-width:768px)').matches) {
        loginform.style.left = "11%";
        regform.style.left="450px";
        btndesign.style.left="110px";
    }
    else if(window.matchMedia('(max-width:812px)').matches) {
        loginform.style.left = "12%";
        regform.style.left="450px";
        btndesign.style.left="110px";
    } else {
        loginform.style.left="15%";
        regform.style.left="450px";
        btndesign.style.left="110px";
    }
}



