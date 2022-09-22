'use strict';

const formEl = document.getElementById('form');
const usernameEl = document.getElementById('username');
const emailEl = document.getElementById('email');
const mobileEl = document.getElementById('mobile');
const newpasswordEl = document.getElementById('new-password');
const confirmpasswordEl = document.getElementById('confirm-password');

formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    if(usernameEl.value === ""){
        const formControlEl = usernameEl.parentElement;
        formControlEl.classList.add('error');
    }
    else{
        const formControlEl = usernameEl.parentElement;
        formControlEl.classList.add('success')
    }
    if(emailEl.value === ""){
        const formControlEl = emailEl.parentElement;
        formControlEl.classList.add('error');
    }
    else{
        const formControlEl = emailEl.parentElement;
        formControlEl.classList.add('success')
    }
    if(mobileEl.value === ""){
        const formControlEl = mobileEl.parentElement;
        formControlEl.classList.add('error');
    }
    else{
        const formControlEl = mobileEl.parentElement;
        formControlEl.classList.add('success')
    }
    if(newpasswordEl.value === ""){
        const formControlEl = newpasswordEl.parentElement;
        formControlEl.classList.add('error');
    }
    else{
        const formControlEl = newpasswordEl.parentElement;
        formControlEl.classList.add('success')
    }
    if(confirmpasswordEl.value === ""){
        const formControlEl = confirmpasswordEl.parentElement;
        formControlEl.classList.add('error');
    }
    else{
        const formControlEl = confirmpasswordEl.parentElement;
        formControlEl.classList.add('success')
    }
});