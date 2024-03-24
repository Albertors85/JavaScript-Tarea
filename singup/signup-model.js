export async function createUser(user,passW){

    const sendUser = await fetch('http://localhost:8000/auth/register',{
       
    method: "POST",
    
        body: JSON.stringify( {
            username: user,
            password: passW
            }),
    
        headers:{
            'Content-type': "application/json"
        }
    });
    
    if (!sendUser.ok){
        throw new Error('Error creando usuario');
    }

}

