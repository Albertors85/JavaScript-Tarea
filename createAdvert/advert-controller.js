import { createAdvert } from "./advert-model.js";

export function createAdvertController(element){
  

    element.addEventListener('submit',async()=>{

        const formData = new FormData(element);
        const advert = formData.get("advert")

        try{
                await createAdvert(advert);

                setTimeout(()=>{
                    window.location= "index.html";
                },4000)
            }catch(error){
                alert(error)
            }
    })

   
}

