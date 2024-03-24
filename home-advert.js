import {advertControl } from "./advertisment/advert-controller.js";
import { notificationController } from "./notification/notification-controller.js";


document.addEventListener('DOMContentLoaded',()=>{
    
    const advertList = document.querySelector('.advertList');
    const notiList =document.querySelector('.notiList');
    const {showNoti}= notificationController(notiList);
   
   
    advertList.addEventListener('errorLoadAdvert',(event)=>{
        showNoti(event.detail.message)
        event.stopPropagation();
    });



    advertControl(advertList);
})




