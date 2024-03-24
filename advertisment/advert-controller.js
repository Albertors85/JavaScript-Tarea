import { getAdverts } from "./advert-model.js";
import { buildAdvert } from "./advert-view.js";
import { triggerEvent } from "../tooles/triggerEvent.js";


export async function advertControl(advertList){
    const spin = advertList.querySelector('.loader');

    try{
        const spin = advertList.querySelector('.loader');
        spin.classList.toggle('hidden');
        const adverts = await getAdverts();

        if (adverts.length===0 ){
            voidAdvert(advertList);

        }
        else{
            renderAdvert(adverts,advertList);
          
        }
    }catch (errorMessagge){
        triggerEvent('errorLoadAdvert',{
        message: errorMessagge    
        }, advertList)  

       
    }finally{
        spin.classList.toggle('hidden');
    }

};



function voidAdvert(advertList){
   advertList.innerHTML= '<h3> Lo sentimos no hay productos disponibles, prueba más adelante </h3>'

};

function renderAdvert(adverts,advertList){
    adverts.forEach(advert => {
        const advertElement = document.createElement('div');
        advertElement.innerHTML= buildAdvert(advert);
        advertList.appendChild(advertElement); 
        })

}
   
       
            
          

