export const  createAdvert= async(name,description, cost, statu,id)=>{

    const url= "http://localhost:8000/api/adverts";
    const token = localStorage.getItem('token');

    const body={
        name: name,
        description: description,
        cost:cost,
        statu: statu,
        id: id,

    };
    
    let response;

    try{
        response = await fetch(url,{
            method: "POST",
            body: JSON.stringify(body),
            headers:{
                'Content-type': 'application/json',
                'Authoritation': `Bearer ${token}`
            }
        });


        if (!response.ok){
            const data = await response.json()
            throw new Error(data.message);
        }
      
    }catch(error){
        if(error.message){
            throw error.message;
        }else{
            throw error;
        }
    }

}
