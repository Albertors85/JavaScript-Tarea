import { createAdvertController} from "./advert-controller.js";

document.addEventListener('DOMContentLoaded',()=>{

    const advertForm = document.querySelector('.form-Advert')

    createAdvertController(advertForm); 

});

