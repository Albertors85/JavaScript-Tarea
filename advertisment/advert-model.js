function parseAdverts(data){
    return data.map(data => ({
        name : data.name,
        description: data.description,
        cost: data.cost,
        statu: data.statu,
        user: data.user,

    }))
}


export async function getAdverts(){
    const url =  'http://localhost:8000/api/adverts'
    let adverts=[];

    try{
        const response = await fetch(url);
        const data = await response.json();
        adverts= parseAdverts(data);
    } catch(error){
        throw new Error('Error no se han cargado los productos')
        }
        
    return adverts
}



