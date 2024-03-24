import { createUser } from "./signup-model.js";

export function signupUserController(element){

    element.addEventListener('submit', async (event)=>{
        
        event.preventDefault();

        const pass = element.querySelector('#password');
        const passConfirm = element.querySelector('#password-inspect');
    
        if (pass.value !== passConfirm.value){
            
            alert('error contraseña');

        }else{
            try{
                await createUser(user.value,passConfirm.value)
                window.location.href= "../index.html"
                alert("usuario creado")

            }catch(error){
                alert(error)
            }   
    
        }

    }) 
}
