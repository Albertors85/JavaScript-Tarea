import {triggerEvent} from "../tooles/triggerEvent.js"
import { loginUser } from "./login-model.js";

export const loginController =  (loginForm)=>{
    loginForm.addEventListener('submit', (event)=>{
        event.preventDefault();

        submitLogin(loginForm);
    })

};


const  submitLogin = async (loginForm)=>{

    const {user, password} = getData(loginForm);
    try{
        triggerEvent('startLoginUser',null,loginForm)

        const jwt = await loginUser(user, password)
        alert('Conectado')
        localStorage.setItem('token',jwt);
        window.location = './index.html'
    }catch(error){
        alert(error)
    }finally{
        triggerEvent('finishLogin',null,loginForm)
    }
}




const  getData = (loginForm)=>{
    const formData = new FormData(loginForm);
    const user = formData.get('user');
    const password = formData.get('password');
    
    return{
        user:user ,
        password: password
    }
}

