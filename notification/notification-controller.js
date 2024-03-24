import { buildNoti } from "./notification-view.js";

export function notificationController(notiContainer){
   
    function showNoti(message){
        const notification = document.createElement('div');
        notification.innerHTML = buildNoti(message);
        notiContainer.appendChild(notification);
    }

    return {
        showNoti
    }
};

