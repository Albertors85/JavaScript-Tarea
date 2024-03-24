import {loginController} from "./login-controller.js"

document.addEventListener('DOMContentLoaded',()=>{
    const loginform =document.querySelector('#login');
    loginController(loginform);
});