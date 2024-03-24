import { createUser } from "./signup-model.js";
import { signupUserController } from "./signup-controller.js";

document.addEventListener('DOMContentLoaded',()=>{

    const signUpForm = document.querySelector('.form-signUp')

    signupUserController(signUpForm)  

});

